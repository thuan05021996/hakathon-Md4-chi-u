import { Request, Response } from "express";
import { addQuestionMysql, answerInQuestionMysql, getQuestionByIdMysql, getQuestionMysql } from "../services/question.services";



// lấy question theo id
export const getQuestionById = async (req: Request, res: Response) => {
    const { id } = req.params
    try {
        const result = await getQuestionByIdMysql(id as unknown as number);
        res.status(200).json(result)
    } catch (error) {
        console.log(error)
    }
}
// lấy toàn bộ câu trả lời của câu hỏi
export const answerInQuestion = async (req: Request, res: Response) => {
    const { id } = req.params
    try {
        const result = await answerInQuestionMysql(id as unknown as number);
        res.status(200).json(result)

    }catch (error) {
        console.log(error)
    }
}
// lấy tàon bộ danh sach câu hỏi
export const getQuestion = async (req: Request, res: Response) => {
    // console.log("123",req.query)
    const {categoryid,level,limit} = req.query;
    console.log(categoryid,level,limit,"1111111111")
    if(req.query){

    }else{
        try {
            const  result = await getQuestionMysql();
            res.status(200).json(result)
        } catch (error) {
            console.log(error)
        }
    }

    
}
// thêm mới một câu hoi
export const addQuestion = async (req: Request, res: Response) => {
    const {categoryid,content,level} = req.body;
    // console.log(categoryid,"111111111")
    // console.log(content,"111111111")
    // console.log(level,"111111111")
    const result = await addQuestionMysql(categoryid,content,level);
    res.status(201).json({
        message : "Thêm thành công"
    })

}
// lấy theo các tiêu chí mình chọn  (dễ, khó , số lượng câu hỏi)
// export const getQuestionByfilter = async(req: Request, res: Response) => {
//     console.log(req.query,"1111111111");
    
// }