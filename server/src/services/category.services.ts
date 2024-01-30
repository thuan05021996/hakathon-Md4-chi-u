import mysql2 from "mysql2/promise";
import pool from "../config/database.config";

// danh sách category
export const listCategoryMysql = async () => {
    const products = mysql2.createPool(pool)
    const [rows] = await products.execute("SELECT * FROM category")
    return rows 

}
// lấy category theo id
export const getCateloryByIdMysql = async (id : number) => {
    const products = mysql2.createPool(pool)
    const [rows] = await products.execute("SELECT * FROM category WHERE cateloryId = ?", [id])
    return rows 
}
// thêm mới category

export const addNewCategoryMsql = async (cateloryName : string) => {
    const products = mysql2.createPool(pool)
    const [rows] = await products.execute("INSERT INTO category (cateloryName) VALUES (?)", [cateloryName])
    return rows 
}