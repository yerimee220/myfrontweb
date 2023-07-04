alert("오늘도 심예림")
//로드 이벤트
window.addEventListener('load', function() { //window에서 load 이벤트가 발생하면 콜백 함수를 호출하라
    alert("차량 맞추기 게임")
    let resultObj = 
    document.getElementById('result') //HTMLElement타입 반환
    console.log(resultObj)

    let resultObj2 = 
    document.querySelector('input[type=text]') //Element타입 반환
           //querySelector("#result")
    console.log(resultObj2)

    resultObj2.value = 'HELLO'
    resultObj2.maxLength = 10; //<input type="" value="" maxLength=10>
    resultObj2.style.color = 'white';
    resultObj2.style.backgroundColor = 'black'

    let num = 0;
    let op;
    let bts = document.querySelectorAll('button');
    for(let i=0; i<bts.length; i++){
        // console.log(bts[i].innerHTML);
        //클릭 이벤트
        // bts[i].addEventListener("click", function(){
        // console.log(bts[i].innerHTML)
        // alert(this.innerHTML) //this : 클릭 이벤트가 발생된 곳
        
        bts[i].addEventListener("click", ()=>{
            switch(bts[i].innerHTML){
                case '=':
                    resultObj2.value = num;
                    op=undefined;
                    break;
                case '+':
                case '-':
                    op = bts[i].innerHTML;
                    break;
                default :
                    resultObj2.value = bts[i].innerHTML;
                    if(op == '+'){
                        num += parseInt(resultObj2.value) //문자->정수
                    }else if(op == '-'){
                        num -= parseInt(resultObj2.value) //문자->정수
                    }else{
                        num = parseInt(resultObj2.value) //문자->정수
                    }

                    // num = Number(resultObj2.value) //문자->숫자
            }
            // resultObj2.value = bts[i].innerHTML;
            console.log(bts[i].innerHTML, num)
            // console.log(bts[i].innerHTML)
            // alert(this.innerHTML)
            // console.log(this) //this : window 객체
        })
    }

    //DOM트리에서 all checkbox 객체 찾기
    let chkAllObj = 
    document.querySelector('fieldset.all>input[type=checkbox]')

    //DOM트리에서 one,two,three checkbox 객체 찾기
    let chkObjs = 
    document.querySelectorAll('fieldset.each>input[type=checkbox]')

    //---all checkbox객체에서 클릭되었을 때 할 일 START---
    chkAllObj.addEventListener('click', (e)=>{
        // console.log(e.target.checked);
        chkObjs.forEach((chk)=>{
            chk.checked = e.target.checked
        })
    })
    //---all checkbox객체에서 클릭되었을 때 할 일 END---

    //--차량 대분류를 선택했을 때 할 일 START ---
     let carTypeObj = 
        document.querySelector('div.car>select.type');

        //==중분류용 select객체 
     let carType2Obj = 
         document.querySelector('div.car>select.type2');

    
        carTypeObj.addEventListener('click',()=>{
        console.log('clicked') 
    })

        carTypeObj.addEventListener('change',(e)=>{
        console.log(e.target.value,'changed') 
        switch(e.target.value){
            case 'sedan' :
                // let type1 = ['쏘나타', '더 뉴 아반테', '디 올 뉴 그랜저','디 올 뉴 그랜저Hybird']
                type1 =[{name : '쏘나타',                id : 'sonata'},
                        {name : '더 뉴 아반테',          id : 'abante'},
                        {name : '디 올 뉴 그랜저',       id : 'gtandure'},
                        {name : '디 올 뉴 그랜저Hybird', id : 'hybird'},
                ]
                
                carType2Obj.innerHTML = '<option>선택하세요</option>';
                carType2Obj.innerHTML += `<option value="${type1[0].id}">${type1[0].name}</option>`;
                carType2Obj.innerHTML += `<option value="${type1[1].id}">${type1[1].name}</option>`;
                carType2Obj.innerHTML += `<option value="${type1[2].id}">${type1[2].name}</option>`;
                carType2Obj.innerHTML += `<option value="${type1[3].id}">${type1[3].name}</option>`;
                carType2Obj.style.display = 'inline-block';
                break;

                case 'suv':
                type2= [{name:'팰리세이드', id:'palisade'}, //객체
                        {name:'베뉴', id:'venu'}, 
                        {name:'코나', id:'cona'}]
               
                carType2Obj.innerHTML = '<option>선택하세요</option>'
                type2.forEach((value,index)=>{
                carType2Obj.innerHTML +=
                `<option value=${value.id}>${value.name}</option>`
                    })
                    carType2Obj.style.display='inline-block'
                    break;
    
                    case 'truck':
                      carType2Obj.style.display = 'inline-block';
                      type3 = ['선택하세요','마이티', '마이티 내로우 캡', '더 뉴 파비스', '차없음']; // 배열
                      carType2Obj.innerHTML = ''; // 기존의 옵션들을 초기화
                      let options = document.querySelectorAll('div.car>select.type2>option')
                     
                      // options.forEach((value)=>{
                      //     carType2Obj.removeChild(value)
                      // })

                      type3.forEach((value) => {
                          let optionObj = document.createElement('option');
                          optionObj.innerHTML = value;
                          carType2Obj.appendChild(optionObj);
                      });
                  
                      break;

                carType2Obj.style.display='inline-block'
                break;
                default:
                carType2Obj.style.display='none'
        }
                 
    })

    //--차량 대분류를  선택했을 때 할 일 END ---
    
    //--입력란에 키보드입력할때 할 일 START --
    //DOMKeyboard입력요소 객체 찾기
    const txtObj =
    document.querySelector('div.keyboard>input[type=text]')
    txtObj.addEventListener('keyup', (e)=>{
        console.log(e.key, e.target.value)
        
        if(e.key =='Enter'){
            this.alert('Enter를 입력했습니다')
        }else{
            e.target.value = e. target.value.toUpperCase() //소문자를 대문자로 바꿔줌

        }

    })
    //--입력란에 키보드입력할때 할 일 END --

    //--전송버튼 클릭할때 할 일 START--
    const btSubmitObj = 
    document.querySelector('div.form>form>button')
    //TODO : 콘솔에 '전송버튼이 클릭되었습니다' 출력
    btSubmitObj.addEventListener('click',()=>{
        console.log('전송버튼이 클릭되었습니다')
    })

    //--전송버튼 클릭할때 할 일 END--

    //--폼의 submit이벤트 발생할때 할 일 START--
    const formobj = document.querySelector('div.form>form')
    formobj.addEventListener('submit', (e) => {
        alert('submit이벤트가 발생했습니다')
        e.preventDefault()
    })
    //--폼의 submit이벤트 발생할때 할 일 END--

    //--a객체의click이벤트 발생할 때 할일 START--

    //div객체
    const linkDivObj  =document.querySelector('div.link')
    linkDivObj.addEventListener('click',(e)=>{
        e.target.style.backgroundColor = 'gray'
    })

    //a객체가 클릭되면~
    const aObj = document.querySelector('div.link>a')
       aObj.addEventListener('click',(e)=>{
           this.alert('링크 클릭')
           e.preventDefault()//default event 처리를 막음
           e.stopPropagation ()//이벤트전파를 중지한다
       })
    //--a객체의click이벤트 발생할 때 할일 END--
       })
