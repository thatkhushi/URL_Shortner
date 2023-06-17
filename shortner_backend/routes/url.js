import express from 'express'
import  {handleNewShortURL,getShortId,getAllUrls,deleteUrl,handleSearch} from '../controllers/url.js';


const router = express.Router();

router.post("/",handleNewShortURL);
router.get('/getAllUrls', getAllUrls)
router.get("/search",handleSearch )
router.get('/:shortId',getShortId)
router.delete('/delete/:id', deleteUrl);

export default router