package mk.ukim.finki.emt.eshop.config;

public class JwtAuthConstants {
    public static final long EXPIRATION_TIME = 864_000_000; // 10 days

    public static final String SECRET = "s3cr3tkey"; // Може да биде било што - Не смее да излезе од самиот сервер, ако го знае ќе знае лесно да си направи декрипција на самиот токен.

    public static final String HEADER_STRING = "Authorization";

    public static final String TOKEN_PREFIX = "Bearer "; //Note the space after Bearer

}
