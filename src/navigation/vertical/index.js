const navigation = ({ type }) => {
  let routes = [
    {
      title: 'Inicio',
      path: type === 'TEACHER' ? '/teacher/home' : '/parent/home',
      icon: 'tabler:smart-home'
    }
  ]

  let teacher = [
    {
      title: 'Clases',
      path: '/teacher/class',
      icon: 'tabler:school'
    }
  ]

  if (type === 'TEACHER') {
    routes.forEach(route => {
      teacher.push(route)
    })
    routes = teacher
  }

  return routes
}

export default navigation
