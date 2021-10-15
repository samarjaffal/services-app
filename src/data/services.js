import React from 'react'
import { FavoriteIconSVG } from './../components/Icons/FavoriteIconSVG/index'
import { WrenchSVG } from '../components/Icons/WrenchSVG'
import { CarSVG } from '../components/Icons/CarSVG'
import { BookSVG } from '../components/Icons/BookSVG'
import theme from './../styles/theme'

export default [

  {
    id: 1,
    user: {
      id: 1,
      name: 'Javier',
      lastName: 'Velasquez',
      email: 'javiervelasquez@gmail.com',
      phone: '+58414734343',
      avatar: 'https://randomuser.me/api/portraits/men/22.jpg'
    },
    type: 'service',
    category: {
      id: 1,
      name: 'Estilo de vida',
      color: 'rgba(82, 113, 255, 0.25)',
      hexColor: theme.colors.purple,
      icon: <FavoriteIconSVG fill={theme.colors.purple} size={34} />
    },
    name: 'Entrenador Personal',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit comm obcaecati eveniet iusto repellat non ratione quae delectus maxi distinctio quo possimus.',
    price: ''
  },
  {
    id: 2,
    user: {
      id: 2,
      name: 'Angel',
      lastName: 'Gomez',
      email: 'angelgomez@gmail.com',
      phone: '+58414734343',
      avatar: 'https://uifaces.co/our-content/donated/IPh6PTBx.jpg'
    },
    type: 'service',
    category: {
      id: 2,
      name: 'Mantenimiento',
      color: 'rgba(243, 75, 80, 0.25)',
      hexColor: theme.colors.red,
      icon: <WrenchSVG fill={theme.colors.red} size={34} />
    },
    name: 'Mecanico',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit comm obcaecati eveniet iusto repellat non ratione quae delectus maxi distinctio quo possimus.',
    price: ''
  },
  {
    id: 3,
    user: {
      id: 3,
      name: 'Maria',
      lastName: 'Jimenez',
      email: 'mariajimenez@gmail.com',
      phone: '+58414734343',
      avatar: 'https://images.unsplash.com/photo-1498529605908-f357a9af7bf5?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=047fade70e80ebb22ac8f09c04872c40'
    },
    type: 'service',
    category: {
      id: 4,
      name: 'Educación',
      color: 'rgba(5, 177, 251, 0.25)',
      hexColor: theme.colors.blue,
      icon: <BookSVG fill={theme.colors.blue} size={34} />
    },
    name: 'Prof. Castellano',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit comm obcaecati eveniet iusto repellat non ratione quae delectus maxi distinctio quo possimus.',
    price: ''
  },
  {
    id: 4,
    user: {
      id: 3,
      name: 'Maria',
      lastName: 'Jimenez',
      email: 'mariajimenez@gmail.com',
      phone: '+58414734343',
      avatar: 'https://images.unsplash.com/photo-1498529605908-f357a9af7bf5?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=047fade70e80ebb22ac8f09c04872c40'
    },
    type: 'service',
    category: {
      id: 4,
      name: 'Educación',
      color: 'rgba(5, 177, 251, 0.25)',
      hexColor: theme.colors.blue,
      icon: <BookSVG fill={theme.colors.blue} size={34} />
    },
    name: 'Prof. Castellano',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit comm obcaecati eveniet iusto repellat non ratione quae delectus maxi distinctio quo possimus.',
    price: ''
  }

]
