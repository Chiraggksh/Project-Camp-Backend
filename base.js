/* Project start:
# At start of the project we do: npm init --> ye ek node ecosystem set up krdeta h so that package.json file bnti h
which is identity card + config file of the project

why need?: Because Node projects depend on:
             external libraries (React, Express, Mongoose, etc.)
             scripts (start, build, test)
             versions (very important in real-world projects)

             package.json answers questions like:
            📦 What is this project?
            🔢 Which dependencies does it use?
            ⚙️ How do I run it?
            🧠 Which version is stable? etcc
aapse details lega and json file bnadega

what is npm init -y then? --> zyada details ni mngta fas fas json file bnadeta h

ab jse manle tune express install kia ya kuch aisa install kia toh vo khud json me change hojaegaa bina kch add kre thats so important*/

/* change type:"modules"
now the thing is package json me type:"modules" krle to have some requirement like this -- isse u can use import export types
and can also do some changes in script
difference between module and commonjs : module mtlb ki import export jo ki standard h and commonJs is old and uses require
common js is by default hence we change the type in package.json 

 */

/*# install prettier as dependency
to make version control into sync: ki semicolon lgega ya ni ya fir tab spaces kitne honge thats why same ground hoga
hence u use prettier : some commands --> npm install --save-dev --save-exact prettier
prettierrc: for configuration
.prettierignore : to ignore formatting some files
orr baaki docs me check krlena 
npx prettier . --write : to write
npx prettier . --check : to check

along with this initialise as git repo: git init, .gitignore, add, commit, 
*/

/* nodemon + env set
#to automatically restart your server u use nodemon
in package json mein start is used for production so node is used and dev is used to develop so usme hm nodemon use krr skte h udhrr

# env ka use?
bhai server dont store everything because there are chances that can get leaked hence they use a secure information to take the data from there 
npm i dotenv yee install krlow 
hence we use .env : phle package download krr iska : and check for documentations and setup krow, config krow and then use them in your work

 */

//Project structure
/*
public folder will be serving static files like images, etc
src folder: have codes have different folder -> controllers (all function logic etc), db (creation, deletion, updation everything), middlewares (in between work), models (structure how u keep data in db)
                                                routes (all routing info), utils (emails etc), validators (to validate data)
*/

/* setting express and postman
express setup krow: used to send data on it routes bnane me bhot kaam ata h : see docs
postman: api testing tool h yee -> new collection: new folder: then new request ---> can set variables as well
*/

/* restructure code for personal preference
Restructuring code again : separation of app with index : ek alg hi file rkhoww express ki name app.js and just import that in index.js looks very clean
taki express ki sari dependency alg file me hi aaee
 */

/* express configuration and CORS
CORS issue tb aata h jb frontend and backend alg alg port prr kaam kr rhe ho and browser stop krde sharing and connection because of security issues ese to bhtt dikkate aane lgegi isliee
hence we use middlewares : act as middle layer in server jb b frontend interacts with backend
basic config of express middleware + cors config done + u need to download cors dependency

see app.js
*/

/*standardisation of apiResponse and apiErrors
turns out server se 2 hi cheeze jaa skti h either errors or response : error is efficiently set up by node ecosystem by Error class hme bss reponse ko setup krna h
hence check src/utils and now we wont sent by res.send we will use our own apiResponse class
*/

/*keeping data in constants
data 2 tarike ke h: ek sensitive so we handled .env file for that
now constants me kch b changes hongee toh constants kr skte h check : utils/constants.js
*/

/* connect with mongoDB
vahi mann jo seekha tha tune about mongoose ORM use krte h to connect with mongodb into much nicer and good format:
npm i mongoose : and db folder me daldo aapkaa function
read about mongoose and make a default function to connect and mongoatlas setup krow and callit on index simple -> check db/index.js
hmne bss function bnaayaa h connectDB ka and sorted 

mongo db mee jakee get connection string dhundo:
create collection bhi krr skte ho

browse collection part me free clusterr h: pop up me compass click kroww and get the connection url
projmanage daldo url me add 

*/

/* healthcheck route
so this is itt bhaii mere this much minimum preparation is generally required to complete your basic setup and project how u do it

now jb b hm aws ya kahi b dalte h there is always healthcheck jo system ki health btata h : so basically overall work ab kch aisa hoga ki we will use controllers jisme hmara main logic hoga, routes jisme saare endpoint serve honge, and then we will be calling them on app.js
router mein bhi boiler plate use hota h ek check in routes folder

now we will use try catch ka alternative see controllers/routers and app.js me healthcheck ka code 
basically controllers ka code export hokrr jata h route me : route use route krtaa h alg alg directions me and app.js healthcheck route me kaam krta h thats it

*/

/* CAtch error better with async handler
vahi bhaii async await vala scene add krdo jb b db se lena ho so avoid too many try catch : next ka use in other way check in utils/async-handler and it is a genericc function
u can use it anywhere
*/

/*user schema
bhaiii ab frontend se aega data and we need to register into it: today we are learning about how we can add routes actual prd ka work started
check user models for register to make schema......for random image u can use placehold.co image prr jake 
mongoose helps u in having unique values, lowercase etc sb easy hojataaa h mongoose se

required: [true, "kch bhi daalskte"]
timestamps se created at and updated at aajata h
mongooose se schema se methods and hooks bhi attack kiee ja skte h 

schema bnaya using 2 {},{}
first stores data and second stores timestamps: so schema can also store methods jo ki controller me jate vse ...so can also write methods as well as hooks
*/

/* HOOKS mtlb kya h?

schema me just before saving data : prehook and just after saving data: posthooks
for eg: we need to encrypt pass so we need prehook to encrypt: one way h toh hashed bolege iseyyy
bcrypt is one such library: install bcrypt library from npm 
so import -> we write method just before exporting model....userSchema.pre("save", toh async func not arrow kyuki this pass hota h isme)

but problem: kch orr kaam se save hoga toh bhi ye encrypt hoga hence u need safeguiding option:
conditional lgado if (!this.isModified("password")) return next() 
*/

/* writing mongoose methods:
hmne ye discuss kia tha ki mongoose me tum model schema bnane ke sath sath hooks bhi add krskte ho jse uparr kia and then aap methods bhi add krrskte ho:
u usually write methods in controller but kch schema me hota h

method me bhi userSchema.methods.name daldo
eg isPasswordCorrect -> use async function
and internally bcrypt.compare await me return kradooo
*/

/* jwt tokens

client when send req to server for every req: ek auth mechanism hona chahie ki validate hona chahiee this is where long string aati h
isko hi json web token bolte h .....validate krne me help krta h....digital signatured hote h

used for auth and info exchange : once user logged in...hrr req me jwt include hota h....authorisation header info hoti h
majorly used in authentication, authorization, session management, microservices etc and 
normal problem yee thi agar jwt ni hota to ki session details hme db me store krni hotii hence not scalable so we came up with stateless jwt token idea

structure of jwt?
header.payload.signature

header mtlb konsi algo u are using,
payload mtlb info jo share krte ho encoded hota h (decodable hota h toh pas vgra store naa krna isme )
signature: not readable encrypted hote (if someone modified paylod, signature change hojta h and hence invalid token)

access token and refresh token?
token mtlb long string hotiii h.....ab 2 types hote h with data/ without data....
without data means generate a long random string - used for just one time jsee verification me otp hota h thode time k liee
2 copies hotii h one is in db and one is sent to client....and then check krta h same h to verify krdowww

but data token: isme jwt aata h isme 2 token ate h
access token: thode timeee ke liee
refresh token: zyadaa time kee liee

dono data sath hotee.....server me dono token create krte h....now access token goes to client and refresh token saved in db...access token are stateless they are not stored in db
client bhjta h access token ki copy and then respond krte h but case hoskta h ki access token has expired....logged out and then login

if access token is expired response aata h server se 401 : timed out ab jse hi timed out refresh token bhja jata h client se and then new access token new bnta h if it matches and previous is discarded
intercept krte h axios mee data ko dkhnee mee.....

//////////////////////////////////////////////////////////////////////////CODINGGG OF JWT ///////////////////////////////////////////////////////////////////////////////////////////////

3 token bnege 2 with data (jwt) and 1 without data without data islie kyuki suppose logout ya access token stolen, toh misuse hoskta h jb tk access token ki validity h so this is used to give full control to server: 

.env me ACCESS_TOKEN_SECRET = kchbhilihdooo
ACCESS_TOKEN_EXPIRY=1d

REFRESH_TOKEN_SECRET (separate secret rkh skte ho) and EXPIRY same ....1d and 10 d yesss diff formats hote h
to generate: jsonwebtoken library install krowww......in model import jwt from ....

after that userSchema method add krow generateAccessToken= function --> jwt.sign() me {_id:this._id, email:..., username... same krdoww} ye hota h payload, process.env.ACCESS_TOKEN_SECRET ....{expiresIn: env se expiry lelo}
and return jwtsign

same method bnao generateRefreshToken...same payload lelo, and all same things and return and yes refresh token me payload bhtt lesss info rkhoww

now how to generate without data string --3rd token?
hence iske lie crypto module ye hote temp token used for verifying and password reset

same method generateTemporaryToken and same function : import crypto, unHashedToken=crypto.randomBytes(20).toString("hex") //hex values hoti h unko hm string me convert krte h
ye db me store hogaa hence hash b krtee h const hashedToken= crypto.createHash("sha256").update(unhash ka reference).digest("hex")
jb b ye kisi controller me use hoga tokenExpiry= Date.now() + (20*60*1000)
return {unhash, hash, tokenExpiry}

sirf usermodule hote h itne complexx
*/

/* how to generate and send email templates?

register ka step kya hoga, take some data, valdiate data, check if db alr exist, saved new user, user verification -> email
generate and sending me kaam ata h

mailgen library: install it, utils me jao mail.js...import Mailgen from "mailgen" abhi generate krna seekhre h

const emailVerificationContent= (username,verificationUrl) =>{return {obj}} obj me body:mailgen me check krna
same bnega forgotPasswordContent = same copied

export krdoww both content {}

SENDING THE EMAILLL???
2 mail hoti h dev email, production email
production grade -> brevo, aws ses

in testing test mail platform hote h one such is mailtrap -> sandbox me jaooo
sneding me nodemailer library env me MAILTRAP_SMTP_HOST 
                                     ||    _PORT
                                     ||    _USER
                                     ||    _PASS in sbki details bhrdoww

sending me nodemailer install import nodemailer const sendEmail=async(options)=>{
    const mailGenerator= new Mailgen({theme:"default",}) branding daldoo from mailgen itself
    }

    const emailTextual = mailGenerator.generatePlaintext(options.mailgenContent)
    same emailHTML = generate(same)

    then send me const transporter= nodemailer.createTransport (
    {host:, port: auth:{ user:, pass:}} sb lelooo env se
    )

    const mail={
    from, to, subject, text, html,
    }

    then try catch me await transporter.sendMail(mail) and catch part me console.error("Email failed, credential cehck kroww")
    console.error(error)

    export krdoww sendEmail with content, same like abstraction

    fun btt: u can also reset credentialss huihuihui
*/
