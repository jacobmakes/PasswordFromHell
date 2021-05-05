
import Avatar from '@material-ui/core/Avatar';
import LoadingButton from './LoadingButton';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { useState } from 'react';
import {split as Lsplit } from "string-unified";
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { ana } from './config'

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="javascript:;">
        Jacob Turner
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));



export default function SignIn() {
  const classes = useStyles();
  const [pass, setPass] = useState('');
  const [errmsg, setErrmsg]=useState('')
  const [hardMode, setHardMode]=useState('text')
  const [hasWon, setHasWon]=useState(false)
  const [open, setOpen]=useState(false)
  const[hm,setHm]=useState('Hard Mode?')
  let hardwin= false;
 

  const handleChange = (event) => {
    setPass(event.target.value);
  };

  const handleSubmit = e =>{ 
    e.preventDefault();
    let newerr=checkpass(pass)
    setErrmsg(newerr);
    if(newerr==='checking password'){win();}
    
}
const hardClicked = e =>{
  if(!errmsg){hardwin=true;}

if(hardMode ==='text'){setHardMode('password'); setHm('Easy mode?');}
else{setHardMode('text'); setHm('Hard mode?');}

}
function win(){
setHasWon(true);
setTimeout(()=>{
setOpen(true);
setHasWon(false);}
,3000);

}
function handleClose() {
  setOpen(false);
}


  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} noValidate onSubmit={handleSubmit}>

          <TextField
            error={errmsg && errmsg !== 'checking password'}
            variant="outlined"
            margin="normal"
            type={hardMode}
            required
            fullWidth
            name="password"
            label="Password"
            id="password"
            helperText={errmsg}
            value={pass} 
            onChange={handleChange}
            autoFocus
          />

          <LoadingButton
            loading={hasWon}
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign In
          </LoadingButton>
          <Grid container>
            <Grid item xs>
              <Link href="javascript:;" onClick={hardClicked} variant="body2">
                {hm}
              </Link>
            </Grid>

          </Grid>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Secure password chosen"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            We'll E-mail you in 3 weeks to reset your password to a more secure one.
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </Container>
  );
}
const top1000 = ['puzzle', 'game', 'password hell', 'impossible puzzle', 'password requirements', 'password','123456','12345678','1234','qwerty','12345','dragon','baseball','football','letmein','monkey','696969','abc123','mustang','michael','shadow','master','jennifer','111111','2000','jordan','superman','harley','1234567','hunter','fuckyou','trustno1','ranger','buster','thomas','tigger','robert','soccer','fuck','batman','test','pass','hockey','george','charlie','andrew','michelle','love','sunshine','jessica','6969','pepper','daniel','access','123456789','654321','joshua','maggie','starwars','silver','william','dallas','yankees','123123','ashley','666666','hello','amanda','orange','biteme','freedom','computer','thunder','nicole','ginger','heather','hammer','summer','corvette','taylor','fucker','austin','1111','merlin','matthew','121212','golfer','cheese','princess','martin','chelsea','patrick','richard','diamond','yellow','bigdog','secret','asdfgh','sparky','cowboy','camaro','anthony','matrix','falcon','iloveyou','bailey','guitar','jackson','purple','scooter','phoenix','aaaaaa','morgan','tigers','porsche','mickey','maverick','cookie','nascar','peanut','justin','131313','money','samantha','panties','steelers','joseph','snoopy','boomer','whatever','iceman','smokey','gateway','dakota','cowboys','eagles','chicken','black','zxcvbn','please','andrea','ferrari','knight','melissa','compaq','coffee','booboo','johnny','bulldog','xxxxxx','welcome','james','player','ncc1701','wizard','scooby','charles','junior','internet','mike','brandy','tennis','banana','monster','spider','lakers','miller','rabbit','enter','mercedes','brandon','steven','fender','john','yamaha','diablo','chris','boston','tiger','marine','chicago','rangers','gandalf','winter','barney','edward','raiders','johnson','chester','london','midnight','blue','fishing','000000','hannah','slayer','11111111','rachel','redsox','thx1138','asdf','marlboro','panther','zxcvbnm','arsenal','oliver','qazwsx','mother','victoria','7777777','jasper','angel','david','winner','crystal','golden','butthead','viking','jack','iwantu','shannon','murphy','angels','prince','cameron','girls','madison','wilson','carlos','willie','startrek','captain','maddog','jasmine','butter','booger','angela','golf','lauren','rocket','tiffany','theman','dennis','liverpoo','flower','forever','green','jackie','muffin','turtle','sophie','danielle','redskins','toyota','jason','sierra','winston','debbie','giants','packers','newyork','jeremy','casper','bubba','112233','sandra','lovers','mountain','united','cooper','driver','tucker','helpme','pookie','lucky','maxwell','bear','gators','5150','222222','jaguar','monica','fred','happy','hotdog','gemini','lover','777777','canada','nathan','victor','florida','88888888','nicholas','rosebud','metallic','doctor','trouble','success','stupid','tomcat','warrior','peaches','apples','fish','qwertyui','magic','buddy','dolphins','rainbow','gunner','987654','freddy','alexis','braves','2112','1212','cocacola','xavier','dolphin','testing','bond007','member','calvin','voodoo','7777','samson','alex','apollo','fire','tester','walter','beavis','voyager','peter','bonnie','rush2112','beer','apple','scorpio','jonathan','skippy','sydney','scott','red123','power','gordon','travis','beaver','star','jackass','flyers','232323','zzzzzz','steve','rebecca','scorpion','doggie','legend','ou812','yankee','blazer','bill','runner','birdie','bitches','555555','parker','topgun','asdfasdf','heaven','viper','animal','2222','bigboy','4444','arthur','baby','private','godzilla','donald','williams','lifehack','phantom','dave','rock','august','sammy','cool','brian','platinum','jake','bronco','paul','mark','frank','heka6w2','copper','billy','garfield','willow','little','carter','albert','69696969','kitten','super','jordan23','eagle1','shelby','america','11111','jessie','house','free','123321','chevy','bullshit','white','broncos','surfer','nissan','999999','saturn','airborne','elephant','marvin','shit','action','adidas','qwert','kevin','1313','explorer','walker','police','christin','december','benjamin','wolf','sweet','therock','king','online','brooklyn','teresa','cricket','sharon','dexter','racing','gregory','0000','teens','redwings','dreams','michigan','magnum','87654321','nothing','donkey','trinity','digital','333333','stella','cartman','guinness','123abc','speedy','buffalo','kitty','pimpin','eagle','einstein','kelly','nelson','nirvana','vampire','xxxx','playboy','louise','pumpkin','snowball','test123','girl','sucker','mexico','beatles','fantasy','ford','gibson','celtic','marcus','cherry','cassie','888888','natasha','sniper','chance','genesis','hotrod','reddog','alexande','college','jester','passw0rd','smith','lasvegas','carmen','slipknot','3333','death','kimberly','1q2w3e','eclipse','1q2w3e4r','stanley','samuel','drummer','homer','montana','music','aaaa','spencer','jimmy','carolina','colorado','creative','hello1','rocky','goober','friday','scotty','abcdef','bubbles','hawaii','fluffy','mine','stephen','horses','thumper','5555','pussies','darkness','asdfghjk','pamela','boobies','buddha','vanessa','sandman','naughty','douglas','honda','matt','azerty','6666','shorty','money1','beach','loveme','4321','simple','poohbear','444444','badass','destiny','sarah','denise','vikings','lizard','melanie','assman','sabrina','nintendo','water','good','howard','time','123qwe','november','xxxxx','october','leather','young','101010','extreme','hard','password1','vincent','lacrosse','hotmail','spooky','amateur','alaska','badger','paradise','maryjane','crazy','mozart','video','russell','spitfire','anderson','norman','eric','cherokee','cougar','barbara','long','420420','family','horse','enigma','allison','raider','brazil','blonde','jones','55555','dude','drowssap','jeff','school','marshall','lovely','1qaz2wsx','jeffrey','caroline','franklin','molly','snickers','leslie','nipples','courtney','diesel','rocks','eminem','westside','suzuki','daddy','passion','hummer','ladies','zachary','frankie','elvis','reggie','alpha','suckme','simpson','patricia','147147','pirate','tommy','semperfi','jupiter','redrum','freeuser','wanker','stinky','ducati','paris','natalie','babygirl','bishop','windows','spirit','pantera','monday','patches','brutus','houston','smooth','penguin','marley','forest','cream','212121','flash','maximus','bobby','bradley','vision','pokemon','champion','fireman','indian','softball','picard','system','clinton','cobra','enjoy','lucky1','claire','claudia','boogie','timothy','marines','security','dirty','admin','wildcats','dancer','hardon','veronica','abcd1234','abcdefg','ironman','wolverin','remember','great','freepass','bigred','justice','francis','hobbes','kermit','pearljam','mercury','domino','9999','denver','brooke','rascal','hitman','mistress','simon','tony','bbbbbb','friend','peekaboo','budlight','electric','sluts','stargate','saints','brittany','bigman','zombie','swimming','duke','qwerty1','babes','scotland','disney','rooster','brenda','mookie','swordfis','candy','duncan','olivia','hunting','blink182','alicia','8888','samsung','bubba1','whore','virginia','general','passport','aaaaaaaa','liberty','arizona','jesus','abcd','newport','skipper','rolltide','balls','happy1','galore','christ','weasel','242424','wombat','digger','classic','bulldogs','poopoo','accord','popcorn','turkey','jenny','amber','bunny','mouse','007007','titanic','liverpool','dreamer','everton','friends','chevelle','carrie','gabriel','psycho','nemesis','burton','pontiac','connor','eatme','lickme','roland','mitchell','ireland','lincoln','arnold','spiderma','patriots','goblue','devils','eugene','empire','asdfg','cardinal','brown','shaggy','froggy','qwer','kawasaki','kodiak','people','phpbb','light','54321','kramer','chopper','honey','whynot','lesbian','lisa','baxter','adam','snake','teen','ncc1701d','qqqqqq','airplane','britney','avalon','sandy','sugar','sublime','stewart','wildcat','raven','scarface','elizabet','123654','trucks','wolfpack','pervert','lawrence','raymond','redhead','american','alyssa','bambam','movie','woody','shaved','snowman','tiger1','chicks','raptor','1969','stingray','shooter','france','stars','madmax','kristen','sports','jerry','789456','garcia','simpsons','lights','ryan','looking','chronic','alison','hahaha','packard','hendrix','perfect','service','spring','srinivas','spike','katie','252525','oscar','brother','bigmac','suck','single','cannon','georgia','popeye','tattoo','texas','party','bullet','taurus','sailor','wolves','panthers','japan','strike','flowers','pussycat','chris1','loverboy','berlin','sticky','marina','tarheels','fisher','russia','connie','wolfgang','testtest','mature','bass','catch22','juice','michael1','nigger','159753','women','alpha1','trooper','hawkeye','head','freaky','dodgers','pakistan','machine','pyramid','vegeta','katana','moose','tinker','coyote','infinity','inside','pepsi','letmein1','bang','control'];


function checkpass(t){ //t password input as a string

// we'll use t = '👨🏾‍🍳pÂs👩🏿‍🦳' as our example string

//complex unicode characters are made up of the basic elements and modifiers
//for example: Â has the base A and the ◌̂  that modifies it.

const au =t.split(''); 
//this basic split function. splits the string into an array of unicode characters and modifiers
//example output: ["\ud83d","\udc68","\ud83c","\udffe","‍","\ud83c","\udf73","p","A","̂","s","\ud83d","\udc69","\ud83c","\udfff","‍","\ud83e","\uddb3"]
//5 characters turn into 18

 const a = [...t];
  //this es6 version does slightly better but still can't manage complex emojis
 //["👨","🏾","‍","🍳","p","A","̂","s","👩","🏿","‍","🦳" ] length 12
// black chef becomes: man, black skin, frying pan

 const abest= Lsplit(t, '');
 //this 3rd party library is the best I could find but still struggles to split some emojis
 //[ "👨🏾‍🍳", "p", "Â", "s", "👩🏿‍", "🦳" ] length 6

 console.log(t,a,au,abest);

 const ar = abest.reverse();
 let lowcount=0; //lower case
 let letcount=0; //all letters

//regular expressions or regex are a way to search through text
// /A/ matches a capital A. [a-z] matches all lower case letters

a.forEach(e=>{ if(e.match(/[a-z]/)){ lowcount++;}});
a.forEach(e=>{ if(e.match(/[a-zA-Z]/)){ letcount++;}});


ana.logEvent('sign in clicked'); //google analytics
if(a.length<6){return 'Your password must be at least 6 characters long'}
if(a.length>255){return 'Your password cannot be longer than 255 characters'}
if(t.match(/\s/u)){return 'Your password cannot contain spaces'}
// in reg ex some letters have special functions when escaped with a backslash. \s means white space
if(lowcount <1){return 'Your password must contain a lower case letter'}
if(!t.match(/\d/u)){return 'Your password must contain a number'} //notice ! for if no number matches
if(!t.match(/[A-Z]/u)){return 'Your password must contain a capital letter'}
ana.logEvent('symbol reached'); //google analytics
if(!t.match(/[^a-zA-Z0-9]/u)){return 'Your password must contain a symbol'}
// here ^ acts like the regex not ! symbol
if(t.match(/I/u)){return 'Your password cannot contain a capital I'}
if(t.match(/A/u)){return 'Your password cannot contain a capital A'}
if(a.length<10){return 'Your password must be at least 10 characters long'}
if(t.match(/(.)\1/u)){return 'Your password cannot contain two identical characters in a row'}
//the dot . means a match for any character
//brackets () means a group 
// an escaped number \1 refers to that group. 
//so this expression says any letter can be the first character and then if the following character is the same match it
if(ar.length>43){return 'Your password cannot be longer than 43 characters'}
if(top1000.find(e=>t.includes(e)) !==undefined){return 'Your password cannot contain a common password'}
if(letcount <8 ){return 'Your password must contain at least 8 letters'}
if(!t.match(/[\u0370-\u03FF]/u)){return 'Your password must contain a greek letter'}
//unicode has a series of character blocks. The range here is all the greek letters
//notice the /u, this means match unicode characters
ana.logEvent('greek letter completed'); //google analytics
if(!t.match(/[🌍-🛌🏿]/u)){return 'Your password must contain an emoji'}
//this doesn't actually include all emojis because they are spaced out throughout unicode
ana.logEvent('emoji completed');
if(!t.match(/8675309/u)){return 'Your password needs Jenny\'s number'}
ana.logEvent('jenny completed');
if(au.includes('\uddb1')){return 'Your emojis cannot have curly hair'}
if(au.includes('\uddb0')){return 'Your emojis cannot have ginger hair'}
if(au.includes('\uddb3')){return 'Your emojis cannot have white hair'}
//The au variable is the array of word split completely into unicode characters and modifiers 
//this means the hair colour modifier is split from the single emoji character and can be checked


if(au.join('') !== ar.join('') ){return 'Your password must be a palindrome'}
//because this relies on exact splitting our example won't actually work
 //[ "👨🏾‍🍳", "p", "Â", "s", "👩🏿‍", "🦳" ]
 // reversed: ["👩🏿‍", "🦳", "s", "Â", "p", "👨🏾‍🍳"]
 ana.logEvent('palindrome completed');

let numOr0 = n => isNaN(n) ? 0 : parseInt(n);
if(t.match(/[A-Z](?=(.{0,2}[A-Z]))/u)){return 'Capital letters cannot be anywhere near eachother'}
// ?= means after the matched letter
// {0,2} means you can have between 0 and 2 of the letter before. Here it's a dot, so it could be any letter.
//followed by [A-Z] any capital letter. So it matches any capital letters with 2 or less of characters between them.
//there is also a match before regex you shouldn't use because it breaks your code on iphones
//a simpler way of doing this might be /[A-Z].{0,2}[A-Z]/
ana.logEvent('capital space completed');
if(a.reduce((d, b) => numOr0(d) + numOr0(b),0) !==100){return 'All the digits in your password must add to 100'}
ana.logEvent('sum100 complete');
if(!t.match(/42/u)){return 'Your password must contain the meaning of life'}
if(lowcount !==1 ){return 'Your password cannot contain more than one lower case letter'}
if(!au.includes('\udfff')|| !au.includes('\udffe')||!au.includes('\udffd')||!au.includes('\udffc')||!au.includes('\udffb'))
{return 'Your emojis aren\'t diverse enough'}
//this works the same way as hair colour but checks for one of each skin colour.


ana.logEvent('diverse complete');
if(!t.match(/𰻝/u)){return 'Your password must contain shaanxi noodles'}
//some unicode characters are so rare they don't seem to render anytngi other than a blank box
//on any devices, but that sqaure still holds the correct unicode.

ana.logEvent('WIN');
return 'checking password'
  
}