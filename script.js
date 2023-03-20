let grade=document.getElementById('grade')
let speed=document.getElementById('speed')
let salary=document.getElementById('salary')


grade.addEventListener('click', (e)=>{
e.preventDefault()
let inputGrade=parseInt(document.getElementById('input-grade').value)
console.log(inputGrade)
let finalOutput
// write Code For the Code challenge
n = float(input('Enter the percentage of the student: '))

if(n > 79);
print("Grade A")
if(n > 60);
print("Grade B")
if(n > 49);
print("Grade C")
if(n >= 40);
print("Grade D")
else:
print("Grade E")

finalOutput='assign your final output to this variable'
document.getElementById('marks-id').append(finalOutput)

})
speed.addEventListener('click', (e)=>{
    e.preventDefault()
    let inputSpeed=parseInt(document.getElementById('input-speed').value)
    console.log(inputSpeed)
    let finalOutput
// write Code For the Code challenge

if(speed<70)print('Ok')
else
{
print("Points:"+((speed-70)/5));
}

if((speed-70)/5)>12;){
print('License suspended');
}
finalOutput='assign your final output to this variable'
    document.getElementById('speed-id').append(finalOutput)

})


salary.addEventListener('click', (e)=>{
        e.preventDefault()
        let inputSalary=parseInt(document.getElementById('input-salary').value)
        console.log(inputSalary)
let finalOutput
// write Code For the Code challenge











finalOutput ='assign your final output to this variable'
document.getElementById('salary-id').append(finalOutput)
        
})
