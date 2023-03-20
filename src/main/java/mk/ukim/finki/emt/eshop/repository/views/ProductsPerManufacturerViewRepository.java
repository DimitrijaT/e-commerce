package mk.ukim.finki.emt.eshop.repository.views;


import mk.ukim.finki.emt.eshop.model.Product;
import mk.ukim.finki.emt.eshop.model.views.ProductPerManufacturerView;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

@Repository
public interface ProductsPerManufacturerViewRepository extends JpaRepository<ProductPerManufacturerView, Long> {

    @Transactional
    @Modifying(clearAutomatically = true)
    @Query(value = "REFRESH MATERIALIZED VIEW public.products_per_manufacturers", nativeQuery = true)
    void refreshMaterializedView();

}
