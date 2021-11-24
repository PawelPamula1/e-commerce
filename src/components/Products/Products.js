import React from 'react';
import { Grid } from '@material-ui/core';
import Product from './Product/Product';
import useStyles from './styles';

const products = [
  {
    id: 1,
    name: 'Shoes',
    description: 'Running shoes.',
    price: '$50',
    image: 'https://assets.ajio.com/medias/sys_master/root/hc4/h09/13018715553822/-288Wx360H-460342492-blue-MODEL.jpg',
  },
  {
    id: 2,
    name: 'Macbook',
    description: 'Apple Macbook.',
    price: '$480',
    image:
      'https://www.vedion.pl/pol_pl_Laptop-Apple-Macbook-Air-A1465-i5-5-generacji-4GB-128GB-SSD-MJVM2LL-A-11-6-HD-Early-2015-Klasa-A-Certified-Refurbished-6382_1.jpg',
  },
  {
    id: 3,
    name: 'Umbrella',
    description: 'Super Umbrella.',
    price: '$5',
    image: 'https://mi-store.pl/pol_pl_Parasol-Mi-Automatic-Umbrella-Black-338_1.jpg',
  },
];

const Products = () => {
  const classes = useStyles();
  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <Grid container justify="center" spacing={4}>
        {products.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
            <Product product={product} />
          </Grid>
        ))}
      </Grid>
    </main>
  );
};

export default Products;
