const surveyQuestions = [
  {
    id: 1,
    question: 'Do you like shawarma?',
    options: ['yes', 'no'],
    type: 'radio',
  },
  {
    id: 2,
    question: 'How often do you eat it?',
    options: ['once a month', 'twice a month'],
    type: 'radio',
  },
  {
    id: 3,
    question: 'Have you ever eaten a bad shawarma?',
    options: ['Yes', 'No'],
    type: 'radio',
  },
  {
    id: 4,
    question:
      'if there was an app that recommends really nice shawarma spots, would you use it?',
    options: ['yes', 'No'],
    type: 'radio',
  },
  {
    id: 5,
    question:
      'Whenever you get buy a bad shawarma, do you always feel like warning others to avoid the vendor?',
    options: ['yes', 'No'],
    type: 'radio',
  },
  {
    id: 6,
    question:
      'Whenever you get buy a nice shawarma, do you always feel like recommending it to others?',
    options: ['yes', 'No'],
    type: 'radio',
  },
  {
    id: 7,
    question:
      'if there was a web app that helps you do all that, would you use it?',
    options: ['yes', 'no'],
    type: 'radio',
  },
  {
    id: 8,
    question: 'Who is your favorite shawarma vendor',
    type: 'text',
  },
  { id: 9, question: 'Where are they located', type: 'text' },
]

export default surveyQuestions
