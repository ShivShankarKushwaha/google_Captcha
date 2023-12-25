const env = require('../config/env');
const loginController =async (req, res) => 
{
    console.log(req.body);
    const { username, password, captcha } = req.body;
    const captchaResponce = await fetch(`https://www.google.com/recaptcha/api/siteverify?secret=${env.CAPTCHA_SECRET}&response=${captcha}`,{method:'post'}).then(res => res.json()).then(result=>{return result});
    console.log('captchaResponce',captchaResponce);
    console.log('formdata',username,password,captchaResponce.success);
    if(captchaResponce.success)
    return res.status(200).json({message:'Success'});
    else
    {
        return res.status(500).json({message:'Failed'});
    }
}

module.exports = {loginController}