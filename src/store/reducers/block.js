import * as actionTypes from './../actions/ActionTypes';
import updatedObject from '../../shared/updateObject';

const initState = {
    colums: [
        {
            columnItem: 'Планы на месяц',
            cards: [
                'Пройти курс по React',
                'Отметить день рождения',
                'Записаться на курсы английского языка, чтобы уехать жить в Лондон',
                'Сделать бекенд своего сайта на node.js',
                'Собрать портфолио',
                'Написать первую статью в блог',
                'Записаться в мотошколу. Хотя немного страшновато, конечно. Друзья и родители против, но очень хочется. Но кого я обманываю, уже 2 года решаюсь на этот шаг 😢 Еще и друзья будут хрустиком называть. В общем, хотя бы подумать над этим.',
                'Нет, я серьезный человек, иду в мотошколу. Записываюсь! '
            ]
        },
        {
            columnItem: 'План на день',
            cards: [
                'Пройти курс по React',
                'Забронировать тир на субботу',
                'Накидать тем для статей в блог',
            ]
        }
    ]
};
const addNewCard = (state, action)=>{

};
const addNewColumn = (state, action)=>{

};
const deleteCard = (state, action)=>{

};
const deleteColumn = (state, action)=>{

};

const reducer = (state, action)=>{
  switch (action.type) {
      case actionTypes.ADD_NEW_CARD: return addNewCard(state, action);
      case actionTypes.ADD_NEW_COLUMN: return addNewColumn(state, action);
      case actionTypes.DELETE_CARD: return deleteCard(state, action);
      case actionTypes.DELETE_COLUMN: return deleteColumn(state, action);
      default: return state;

  }
};
export default reducer;