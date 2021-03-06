import routesContainer from '@/common/components/routesContainer'

//模块part 声明导入
import modulePart01 from "../modulePart/modulePart01/routes"

const innerRoutes = [
    ...modulePart01
]
//导入路由声明
export default [
  {
    path: '/',
    component: routesContainer,
    children: innerRoutes.map((item) => ({
      ...item,
    })
),
},
]
