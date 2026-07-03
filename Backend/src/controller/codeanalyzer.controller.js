import codeReview from "../models/codereview.model.js";
import { analyzeCode } from "../services/api.service.js";



export  const codeanalyzer =  async(req,res)=>{
    try{
        const {language,code}= req.body;

        if(!language || !code){
            return res.status(400).json({message:"language and code are required"});
        }
        const review = await analyzeCode(language, code);

const newCodeReview = await codeReview.create({
  language,
  code,
  overallReview: review.overallReview,
  score: review.score,
  errors: review.errors,
  suggestions: review.suggestions,
  optimizedCode: review.optimizedCode,
  complexity: review.complexity,
  userId: req.user.id,
});

return res.status(201).json({
  message: "Code review created successfully",
  data: newCodeReview,
});


    }catch(error){
        console.error("errors analyzing code:",error);
       return res.status(500).json({messgae:"internal server error"});
    }
    
}