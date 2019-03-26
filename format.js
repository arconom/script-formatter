var script = "PLAY TITLE GOES HERE 1\nPLAY TITLE GOES HERE\na play in one act\nPLAY TITLE GOES HERE 2\nTITLE character list\nCHARACTER NAME: Brief description. Age and gender should\nsuffice.\nCHARACTER NAME: Brief description.\nCHARACTER NAME: Brief description.\nTag Line\nProvide a tag line here.\nSynopsis\nProvide a brief synopsis here. Do not include any identifying\ninformation.\nPLAY TITLE GOES HERE 3\nPLAY TITLE GOES HERE\nSCENE 1\n(Please put stage directions in\nparentheses, and they should always be\nindented. The idea is to clarify the\ndifference between stage directions and\ndialogue. NAMES of characters can be in\nall caps in stage directions.\nBe sure there are page numbers on every\npage.)\nWOMAN\nThis is my line!\n(Major stage directions: CHARACTER I moves\naround the stage, CHARACTER II enters or\nexits, etc.)\nMAN\nHi.\nWOMAN\nHi. Can I help you?\nMAN\nI want this to be my next line.\nWOMAN\nWhy do I care?\nMAN\nI’m in a hurry. Right now it’s...\n(Checks watch.)\n2:30, and I must be going —\nWOMAN\nIs that so?\nMAN\nYes, that’s so. This is an especially long bit of\nPLAY TITLE GOES HERE 4\nMAN cont.\ndialog that will flow to the next page, and therefore I need to\nadd another character heading, thus indicating that I'm still\ntalking.\nWOMAN\nIs that so? In my case, the dialog is all on the same page, so\nthere is no need to indicate that my dialog is continuing. In\nthe next scene we’ll be telling you how to use this document as\na template for your play.\nMAN\nDo be sure to leave a blank line after each speech and before a\ncharacter’s name.\nEND SCENE\nPLAY TITLE GOES HERE 5\nSCENE 2\n(As a general rule, start scenes and new\nacts on an entirely new page.)\nWOMAN\n(Checks watch)\nI just wanted to say that, for the playwrights’ convenience, if\nthey are using the Word document version of this file as a Word\nTemplate, they can get the character name to line up properly\nby choosing the “Character name” style from the style list.\nMAN\nGood point. Dialog is the Normal style, stage directions that\nstand by themselves can be aligned by choosing the Stage\nDirection styleWOMAN\nI know! And the directions within a character’s dialog are\naligned using the Parenthetical style. In a reading it helps\nmake it stand out that the person reading stage directions is\nnot to read the parentheticals, which helps for PCSF readings.\nMAN\nYes, but there’s so much variation in “standard” play\nformatting that we won’t penalize you for using a different\nindentation for your stage directions. Just do be sure to\nindent it so it can easily be distinguished from the dialog and\nthe character names.\nCURTAIN";
var title = "PLAY TITLE GOES HERE";
var sceneHeaderRegex = /SCENE\s(\d+)/g;
var characterNames = ["MAN", "WOMAN"];
var documentTags = ["TITLE", "END", "PLAY", "CURTAIN"];
var stageDirectionRegex = /\(([\s\S]+?)\)/g;
var dialogueRegex = new RegExp("(" + characterNames.join("|") + ")([\\s\\S]+?)(?=" + characterNames.join("|") + "|" + documentTags.join("|") + ")", "g");

document.querySelector("head").innerHTML = "";

AddStyleSheet(".direction{margin-left: 4em; background-color: lightgray;}" 
+ ".MAN{background-color: lightblue;}" 
+ ".WOMAN{background-color: orange;}"
+ ".title, .footer, .header{text-align: center;}"
+ ".name{font-weight: bold;}"
+ ".page-number{float:right;}"
);

document.body.innerHTML = script
.replace(dialogueRegex, "<div class=\"$1\"><div class=\"name\">$1</div><p>$2</p></div>")
.replace(stageDirectionRegex, "<div class=\"direction\">$1</div>")
.replace(sceneHeaderRegex, "<h3 class=\"header\">SCENE $1</h3>")
.replace(new RegExp(title + "\\s*(\\d+)", "g"), "<br/><hr/><br/><h2 class=\"title\">"+title+"</h2><span class=\"page-number\">$1</span>")
.replace("END SCENE", "<div class=\"footer\">END SCENE</div>")
;

/*
        This adds some CSS to the page
        */
function AddStyleSheet(content) {
    //for cross browser compatibility, use the following commented statement
    //var cssRuleCode = document.all ? 'rules' : 'cssRules'; //account for IE and FF

    document.querySelector("head").appendChild(this.CreateStyleSheet(content));
}

/*
        This function creates a style sheet and returns it.
        */
function CreateStyleSheet(content) {
    var style = document.createElement("style");
    var styleSheet = style.styleSheet;

    if (styleSheet) {
        stylesheet.cssText = content;
    } else {
        style.appendChild(document.createTextNode(content));
    }

    style.type = "text/css";
    return style;
}
