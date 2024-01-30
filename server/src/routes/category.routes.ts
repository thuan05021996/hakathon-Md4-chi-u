import  express  from 'express';
import { addNewCategory, getCateloryById, listCategory } from '../controllers/category.controllers';

const cateRouter = express.Router();

// lấy danh sach category
cateRouter.get("",listCategory)
// lấy category theo id
cateRouter.get("/:id",getCateloryById)
// thêm mới category
cateRouter.post("",addNewCategory)


export default cateRouter

