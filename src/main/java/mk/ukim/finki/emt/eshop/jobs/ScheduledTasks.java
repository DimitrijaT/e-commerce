package mk.ukim.finki.emt.eshop.jobs;


import mk.ukim.finki.emt.eshop.service.ProductService;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

@Component
public class ScheduledTasks {

    private final ProductService productService;

    public ScheduledTasks(ProductService productService) {
        this.productService = productService;
    }

    //Може како сакаме да го викаме методот
    @Scheduled(fixedDelay = 5000) //милисекунди
//    @Scheduled(cron = "")
    public void refreshMaterializedView(){
//        this.productService.refreshMaterializedView();
    }

}


