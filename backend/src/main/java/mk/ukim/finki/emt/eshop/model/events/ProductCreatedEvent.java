package mk.ukim.finki.emt.eshop.model.events;

import lombok.Getter;
import mk.ukim.finki.emt.eshop.model.Product;
import org.springframework.context.ApplicationEvent;

import java.time.LocalDateTime;

@Getter
public class ProductCreatedEvent extends ApplicationEvent {

    // Ќе ни каже кога се случил/публикувал ваквиот event,
    // ќе знаеме кога се креирал тој продукт, за кај Listen-ерите да го искористиме тој податок
    private LocalDateTime when;

    public ProductCreatedEvent(Product source) {
        super(source);
        this.when = LocalDateTime.now();
    }

    public ProductCreatedEvent(Product source, LocalDateTime when){
        super(source);
        this.when = when;
    }

}

