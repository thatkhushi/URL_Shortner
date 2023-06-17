import express from 'express'
import  {handleGenerateNewShortURL,getShortId,getAllUrls,deleteUrl,handleSearch} from '../controllers/url.js';


const router = express.Router();

router.post("/",handleGenerateNewShortURL);
router.get('/getAllUrls', getAllUrls)
router.get("/search",handleSearch )
router.get('/:shortId',getShortId)
router.delete('/delete/:id', deleteUrl);

export default router