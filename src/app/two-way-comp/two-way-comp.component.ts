import { Component, OnInit } from '@angular/core';

export enum Gender { // enum
  Male = 1,
  Female = 2,
  ABinary = 3,
}

export interface inter{ //חוזה חייב לממש את כל מה שנמצא בתוכו אם משתמשים בו
  name:string;
  age:number;

}

@Component({
  selector: 'app-two-way-comp',
  templateUrl: './two-way-comp.component.html',
  styleUrls: ['./two-way-comp.component.css']
})
export class TwoWayCompComponent implements OnInit {

  
  
  color:string = 'blue';
  

  var1 = 0;

  // בכדיי להשמתמש בenum צריך להכניס אותו לתוך משתנה מכיוון שהוא מוגדר מחוץ לקלאס
    myEnum = Gender;

  multiType:string|number = ''; // משתנה שיכול להיות משני סוגים (type-script)

  someVar = 0; //מזהה אוטומטי הכוונה שהוא מזהה אוטומטי את סוג המשתנה אם ננסה להשים ערך מכל סוג אחר שהוא לא מספר הוא 
  // "התעצבן" ויראה הודעת שגיאה (לדוגמה שמתי ערך מסוג סטרינג בבנאי והוא כועס) 

  someobj:{a:string,b:boolean} = {a:"daniel",b:true} //אובייקט אנונימי בהמצעות הגדרת הסוג ישירות אחרי הנקודותיים

  someArr:[number,number,string,{a:string,b:boolean}] = [0,2,'some string', {a:'',b:true}]
  // מערך שאתה מיישם את הערכים שלו  והוא מקבל את כל הסוגים על פי מה שנתתי פה הוא מקבל 
  //מספר ,מספר,סטרינג,ואובייקט שמקבל סטרינג ובוליאני
 
  
    

 
  constructor() { 
   // this.someVar = ''; // מזהה אוטומטי

   this.var1 = '2222' as any as number;  //שימוש ב as 
  } 

  ngOnInit(): void {
  }

  hanleRecolor(){
    this.color = 'orange';
  }

  otherFunction():{ dd:number;aa:string} { 
     //on the fly מה שהוא מחזיר 
    //אפשר לדעת איזה סוג ערכים הפונקציה מחזירה 
    return {dd:0,aa:''};
  }

  functionArry() : [number,boolean] { // פה אתה שם את הסוג ערך
//פונקציה שהיא מסוג מערך שמכיל ערכים מסוג מספר ובוליאני   
    return [1,true]; // פה אתה מחזיר את הערכים על פי הסוג שהגדרת 
  }

  functionThatReturnObject(myobj:{C:string,v:boolean}):{ a:number,b:boolean} {
   // myobj הוא אובייקט שמכיל 2 מפתחות מסוג (C: string ) ו (V:boolean)

   //הפונקציה מחזירה ערכים מסוג a:number ,ו b:boolean
    

    return {a:1,b:true}; //פה מחזירים את הערכים שהפונקציה מקבלת 



  }
}
