package cn.didano.weichat.Controller;

import java.util.List;

import javax.websocket.server.PathParam;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import cn.didano.weichat.Service.UserService;
import cn.didano.weichat.constant.BackType;
import cn.didano.weichat.json.Out;
import cn.didano.weichat.model.Tb_staff;
import cn.didano.weichat.model.Tb_user;
import cn.didano.weichat.util.Hand_StudentParent;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
/*
 * todo:1.user表的type类型还需要更新;
 * 
 * 3.schoolid加入到user表中;
 */
/*@RunWith(SpringRunner.class)
@SpringBootTest*/

@Api(value = "数据库导入服务", tags = "数据库导入服务")
@RestController
@RequestMapping(value = "/base")
public class DataTransferController {

	static Logger logger = Logger.getLogger(DataTransferController.class);

	@Autowired
	private UserService userService;
	
	@ApiOperation(value = "数据库tb_user表从指定行开始删除数据", notes = "数据库tb_user表从指定行开始删除数据")
	@GetMapping(value = "/delete/{row}")
	@ResponseBody
	public Out<String> userDataDelete(@PathVariable Integer row) {
		logger.info("访问 DataTransferController类: userDataDelete方法");
		Out<String> back = new Out<>();
		try {
			Integer rowNum = 0;
			rowNum = userService.deleteDatafrom(row);
			if (rowNum > 0) {
				back.setBackTypeWithLog(BackType.SUCCESS_DELETE, "总共删除的条目数为 rowNum=" + rowNum);

			} else {
				// 更新有问题
				back.setBackTypeWithLog(BackType.FAIL_DELETE_NO_DELETE, "rowNum=" + rowNum);
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
		return back;
		
	}

	/*
	 * 用户表数据的迁移,将其它表中已有的数据迁移过来;
	 */
	/*@Test*/
	@ApiOperation(value = "执行导入数据到数据库tb_user表", notes = "执行导入数据到数据库tb_user表")
	@GetMapping(value = "transfer")
	@ResponseBody
	public Out<String> userDataTransfer() {
		logger.info("访问 DataTransferController类: userDataTransfer方法");
		// Map<String, Tb_user> userMap = new HashMap<>();
		Out<String> back = new Out<>();
		try {
			Integer rowNum = 0;
			List<Tb_user> userList = null;
			//查询用户绑定表的用户集合,取基本信息;
			userList = userService.getUserListFromOthers();
			// userList = handUserMapper.getUserListFromOthers();
			for (Tb_user tb_user : userList) {
				String openid = tb_user.getOpenid();
				String mobile = tb_user.getMobile();
				// 查询数据库中是否还有多个重复的数据;
				// List<Tb_user> list = userService.getUserByOpenidFromOthers(openid);
				// 查询学校的数据;
				//List<Tb_school> schoolList = userService.getSchoolListByMobile(mobile);
				// 查询班级的数据;
				//List<Tb_class> classList = userService.get
				
				// 根据绑定表的电话,查询家长的数据集合;
				List<Hand_StudentParent> parentList = userService.getStudentParentListByMobile(mobile);
				// 根据绑定表的电话,查询组织的数据集合;
				List<Tb_staff> staffList = userService.getStaffByMobileFromOthers(mobile);
				if (parentList == null && staffList == null) {
					userService.save(tb_user);
					rowNum++;
				}
				logger.info("parentList大小值为: "+parentList.size());
				if (parentList != null && parentList.size() > 0) {
					for (Hand_StudentParent studentParent : parentList) {
						logger.info("进入插入parent方法");
						tb_user.setStaffId(null);
						tb_user.setSchoolParentId(studentParent.getParentId());
						tb_user.setStudentId(studentParent.getStudentId());
						tb_user.setType(30);
						userService.save(tb_user);
						logger.info("插入1次parent数据");
						rowNum++;
					}
				}
				logger.info("staffList大小值为: "+staffList.size());
				if (staffList != null && staffList.size() > 0) {
					for (Tb_staff tb_staff : staffList) {
						logger.info("进入插入staff方法");
						tb_user.setSchoolParentId(null);
						tb_user.setStudentId(null);
						tb_user.setStaffId(tb_staff.getId());
						int type = tb_staff.getType();
						tb_user.setType(type);
						userService.save(tb_user);
						logger.info("插入1次staff数据");
						rowNum++;
					}
				}
				logger.info("已插入的条目数为:   "+rowNum);
			}
			if (rowNum > 0) {
				back.setBackTypeWithLog(BackType.SUCCESS_INSERT, "总共插入的条目数为 rowNum=" + rowNum);

			} else {
				// 更新有问题
				back.setBackTypeWithLog(BackType.FAIL_INSERT_NO_INSERT, "rowNum=" + rowNum);
			}
			logger.info("总共插入的条目数为:   "+rowNum);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return back;
	}
}
