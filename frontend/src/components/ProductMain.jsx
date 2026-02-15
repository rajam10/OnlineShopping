import {
  Box,
  Grid,
  Typography,
  Card,
  CardMedia,
  CardContent,
} from "@mui/material";
import data from "../Data/data";
import {useState} from "react";
const ProductMain = () => {
    const [products, setProducts] = useState(data);
    return (
        <Grid item md={9}>
          <Typography variant="h5" fontWeight={700}>
            Organic Products
          </Typography>

          <Typography variant="body2" color="text.secondary" mb={2}>
            Showing 1–24 of 1,200 results for "Apples"
          </Typography>

          <Grid container spacing={1}>
              {products.map((product) => (
                <Grid item xs={12} sm={6} md={4} lg={3}>
                <Card key={product.id} sx={{ borderRadius: 3 }}>
                <CardMedia
                  component="img"
                  height="200"
                  image="https://images.unsplash.com/photo-1567306226416-28f0efdc88ce"
                  alt="Apples"
                />
                <CardContent>
                  <Typography variant="h6" fontWeight={600}>
                    {product.name}
                  </Typography>
                  <Typography color="text.secondary">
                   {product.description}
                  </Typography>
                </CardContent>
              </Card>
              </Grid>))}
          </Grid>
        </Grid>
    );
}

export default ProductMain;