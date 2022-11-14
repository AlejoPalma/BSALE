import { pool } from "../db.js";

export const getProductos = async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM product");
    if (rows.length <= 0)
      return res.status(404).json({
        message: "Product not found",
      });
    res.json(rows);
  } catch (error) {
    return res.status(500).json({
      message: "Something goes wrong",
    });
  }
};

export const getProductosCategoria = async (req, res) => {
  try {
    const [rows] = await pool.query(
      "SELECT * FROM product WHERE category = ?",
      [req.params.category]
    );

    if (rows.length <= 0)
      return res.status(404).json({
        message: "Product not found",
      });

    res.json(rows);
  } catch (error) {
    return res.status(500).json({
      message: "Something goes wrong",
    });
  }
};
