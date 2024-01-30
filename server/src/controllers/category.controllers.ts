import { Request, Response } from "express";
import { addNewCategoryMsql, getCateloryByIdMysql, listCategoryMysql } from "../services/category.services";




// lấy tàon bộ category
export const listCategory = async (req: Request, res: Response) => {
    try {
            const result = await listCategoryMysql();
            res.status(200).json(result)
    } catch (error) {
        console.log(error)
    }
}
// lấy category theo id
export const getCateloryById = async (req: Request, res: Response) => {

    const { id } = req.params
    try {
            const result = await getCateloryByIdMysql(id as unknown as number);
            res.status(200).json(result)
    } catch (error) {
        console.log(error)
    }
}
// thêm mới category
export const  addNewCategory = async (req: Request, res: Response) => {
    console.log(req.body,"111111111")
    const {cateloryName} = req.body;
    try {
        await addNewCategoryMsql(cateloryName)
        res.status(201).json({
            message :  " Thêm thành công "
        })
    } catch (error) {
        console.log(error)
    }
}