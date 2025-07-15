import { Formik, Form, Field } from "formik";
import { useEffect, useState } from "react";
import * as Yup from "yup";
import styles from "./CreateProduct.module.css";
import type {Category} from "../../types";

const CreateProductSchema = Yup.object().shape({
  title: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  price: Yup.number().min(0, "Price must be at least 0").required("Required"),
  description: Yup.string()
    .min(2, "Too Short!")
    .max(500, "Too Long!")
    .required("Required"),
  category: Yup.number()
    .integer("Category ID must be an integer")
    .required("Required"),
  images: Yup.string()
    .url("Must be a valid URL")
    .required("Required"),
});

// interface Product {
//   title: string;
//   price: string;
//   description: string;
//   category: string;
//   images: string;
// }

  interface ProductCreateDto {
        title: string;
        price: number;
        description: string;
        categoryId: number;
        images: string[];
    }

  export const CreateProduct = () => {
  const [message, setMessage] = useState("");
  const [categories, setCategories] = useState<Category[]>([]);
  useEffect(()=>{fetchCategories();}, [])

  async function fetchCategories() {
    const res = await fetch('https://api.escuelajs.co/api/v1/categories');
    const arr = await res.json();
    setCategories(arr);
  }

  async function fetchCreateProduct(product: ProductCreateDto) {
    const res = await fetch("https://api.escuelajs.co/api/v1/products/", {
      method: "POST",
      headers: { "Content-Type": "Application/JSON" },
      body: JSON.stringify(product),
    });
    if (res.ok) {
      setMessage("Product successfully created");
    }
  }

  return (
    <div>
      <div>{message ? message : null}</div>
      <h1>Create Product</h1>
      <Formik
        initialValues={{
          title: "",
          price: "0",
          description: "",
          category: "0",
          images: "",
        }}
        validationSchema={CreateProductSchema}
        onSubmit={(values) => {

         const {title, price, description, category, images } = values;

          const newProduct = {
            title,
            price: Number(price),
            description,
            categoryId: Number(category),
            images: [images], // даже если это просто строка
          };
          fetchCreateProduct(newProduct);
          console.log(values);
        }}
      >
        {({ errors, touched }) => (

<Form className={styles.createProductForm}>
  <div className={styles.formGroup}>
    <label htmlFor="title">Title:</label>
    <Field id="title" name="title" className={styles.formInput} />
    {errors.title && touched.title && (
      <div className={styles.formError}>{errors.title}</div>
    )}
  </div>

  <div className={styles.formGroup}>
    <label htmlFor="price">Price:</label>
    <Field id="price" name="price" type="number" className={styles.formInput} />
    {errors.price && touched.price && (
      <div className={styles.formError}>{errors.price}</div>
    )}
  </div>

  <div className={styles.formGroup}>
    <label htmlFor="description">Description:</label>
    <Field id="description" name="description" as="textarea" className={styles.formTextarea} />
    {errors.description && touched.description && (
      <div className={styles.formError}>{errors.description}</div>
    )}
  </div>

  <div className={styles.formGroup}>
    <label htmlFor="category">Category:</label>
    <Field as="select" id="category" name="category" className={styles.formSelect}>
 {categories.map(c=> <option value={c.id}>{c.name}</option>)}
    </Field>
    {errors.category && touched.category && (
      <div className={styles.formError}>{errors.category}</div>
    )}
  </div>

  <div className={styles.formGroup}>
    <label htmlFor="images">Images (comma separated URLs):</label>
    <Field id="images" name="images" className={styles.formInput} />
    {errors.images && touched.images && (
      <div className={styles.formError}>{errors.images as string}</div>
    )}
  </div>

  <button type="submit" className={styles.formButton}>Submit</button>
</Form>

        )}
      </Formik>
    </div>
  );
};

export default CreateProduct;
