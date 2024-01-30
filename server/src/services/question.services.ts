import mysql2 from "mysql2/promise";
import pool from "../config/database.config";

// lấy question theo id
export const getQuestionByIdMysql = async (id : number) => {
    const products = mysql2.createPool(pool)
    const [rows] = await products.execute("SELECT * FROM question WHERE question_id = ?", [id])
    return rows 
}
// láy tàon bộ câu trả lời của câu hỏi
export const answerInQuestionMysql = async (id : number) => {
    const products = mysql2.createPool(pool);
    const [rows] = await products.execute("SELECT * FROM `question` JOIN answer ON question.question_id = answer.question_id WHERE question.question_id = ?",
    [id]);
    return rows

}
// lấy danh sach câu hỏi
export const getQuestionMysql = async () => {
    const products = mysql2.createPool(pool);
    const [rows] = await products.execute("SELECT * FROM question");
    return rows

}
// thêm mới câu hỏi
export const addQuestionMysql = async (categoryid : number, content : string, level : number) => {
    const products = mysql2.createPool(pool);
    const [rows] = await products.execute("INSERT INTO question (categoryid, content, level) VALUES (?, ?, ?)", [categoryid, content, level]);
}