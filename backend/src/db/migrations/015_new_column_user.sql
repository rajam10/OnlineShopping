ALTER TABLE products
ADD COLUMN brand_id INT NOT NULL,
ADD CONSTRAINT fk_products_brand
FOREIGN KEY (brand_id) REFERENCES brands(id);