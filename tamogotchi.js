let mealState = ''
let energyState = ''
let moodState = ''
let weight = ''
const tamogotchi = {
    name: 'egg',
    meal: 1,
    energy: 2,
    mood: 4,
    theWeight: 2
    getStatus(){
        if (this.meal < 3) {
            mealState = 'Я голоден'
        }else{
            mealState = 'Я не голоден'
        }
        if (this.energy < 3) {
            energyState = 'Я хочу спать'
        } else {
            energyState = 'Я не хочу спать'
        }
        if (this.mood < 3) {
            moodState = 'Мне скучно'
        } else {
            moodState = 'Мне весело'
        }
        if (this.theWeight < 3){
            weight = 'Я слишком толстый'
        }else{
            weight = 'У меня хороший вес'
        }
        if(this.meal <= 0){
           return console.log(`${this.name} ${"Смерть"}`) 
        }
        if (this.energy <= 0) {
          return console.log(`${this.name} ${"Смерть"}`)
        }
        if (this.mood <= 0) {
          return console.log(`${this.name} ${"Смерть"}`)
        }
        if (this.theWeight <= 0){
             return console.log(`${this.name} ${"Смерть"}`)
        }
        console.log(`Имя: ${this.name}, Еда: ${mealState} ${this.meal}, Энергия: ${energyState}  ${this.energy}, Настроение: ${moodState} ${this.mood} Вес : ${weight} ${this.theWeight}`)
    },
    setName(name){
        this.name = name
    },
    setEat(){
        if (this.meal < 5) {
            this.meal++ 
            this.theWeight++
            this.mood--

        }
    },
    toSleep(){
      if (this.energy < 5) {
        this.energy++
        this.meal--
      }
        
    },
    toPlay(){
      if (this.mood < 5) {
        this.mood++
        this.energy--
         this.theWeight-- 
      }
        
    }
  }
  
  tamogotchi.setName('Skeletor')
  tamogotchi.getStatus()
