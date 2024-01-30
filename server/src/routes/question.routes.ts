import  express  from 'express';
import { addQuestion, answerInQuestion, getQuestion, getQuestionById, } from '../controllers/question.controllers';

const questionRouter = express.Router();

// lấy question theo id
questionRouter.get("/:id",getQuestionById)
// lấy toàn bộ câu trả lời của câu hỏi đó
questionRouter.get("/:id/answer",answerInQuestion)
// lấy toàn bộ câu hỏi
questionRouter.get("",getQuestion)
// thêm mới câu hỏi
questionRouter.post("",addQuestion)
// lấy theo bộ lọc
// questionRouter.get("/filter",getQuestionByfilter)



export default questionRouter