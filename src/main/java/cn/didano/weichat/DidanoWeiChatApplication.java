package cn.didano.weichat;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.web.servlet.ServletComponentScan;
import org.springframework.boot.web.support.SpringBootServletInitializer;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;

import cn.didano.weichat.Service.OfficialAccountService;
import cn.didano.weichat.model.Hand_officialAccount;
import cn.didano.weichat.repository.WxMpInMemoryConfigStorageContainer;
import me.chanjar.weixin.mp.api.WxMpInMemoryConfigStorage;

/*@Configuration
@ComponentScan({ "cn.didano.weichat" })
@ServletComponentScan
@EnableAutoConfiguration*/

@SpringBootApplication
@ComponentScan({ "cn.didano.weichat" })
@ServletComponentScan
public class DidanoWeiChatApplication extends SpringBootServletInitializer {
	private static final Logger log = LoggerFactory.getLogger(DidanoWeiChatApplication.class);
	/*
	 * @Autowired WxMpInMemoryConfigStorageRepository wxMpInfoRepository;
	 */
	@Autowired
	private OfficialAccountService officialAccountService;

	@Override
    protected SpringApplicationBuilder configure(
            SpringApplicationBuilder application) {
        return application.sources(DidanoWeiChatApplication.class);
    }
	
	public static void main(String[] args) {
		SpringApplication.run(DidanoWeiChatApplication.class, args);
	}

	private void initializeOfficialAccountData(List<Hand_officialAccount> hand_officialAccounts) {
		// 清空
		// wxMpInfoRepository.deleteAll();
		for (Hand_officialAccount one : hand_officialAccounts) {
			WxMpInMemoryConfigStorage target = new WxMpInMemoryConfigStorage();
			target.setAppId(one.getAppId());
			target.setSecret(one.getSecret());
			target.setToken(one.getToken());
			target.setAesKey(one.getAesKey());
			log.info("DidanoWeiChatApplication init originalId"+ one.getOriginalId());
			log.info("DidanoWeiChatApplication init appId"+ one.getAppId());
			log.info("DidanoWeiChatApplication init secret"+ one.getSecret());
			log.info("DidanoWeiChatApplication init token"+ one.getToken());
			log.info("DidanoWeiChatApplication init aesKey"+ one.getAesKey());
			WxMpInMemoryConfigStorageContainer.save(one.getOriginalId(),target);
		}
		log.info("加载所有公众号信息");
	}

	@Bean
	public CommandLineRunner init() {
		return (args) -> {
			List<Hand_officialAccount> Hand_officialAccounts = officialAccountService.getAllwxOfficialAccount();
			// 灌入数据
			initializeOfficialAccountData(Hand_officialAccounts);
		};
	}
}
