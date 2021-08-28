import { mount } from '@vue/test-utils'
import About from '@/components/about.vue'
import AboutDet from '@/components/aboutDet.vue'
import Contact from '@/components/contact.vue'
import Footer from '@/components/footer.vue'
import Linked from '@/components/Linked.vue'
import News from '@/components/news.vue'
import Product from '@/components/product.vue'
import Question from '@/components/question.vue'
import Team from '@/components/team.vue'
import Top from '@/components/top.vue'

//コンポーネントが存在するか確認のテスト
describe('About', () => {
    test('コンポーネントが存在する', () => {
      // Logoコンポーネントをマウントする
      const wrapper = mount(About)
      // expect()の中身がtrueだったらテスト合格
      expect(wrapper.exists()).toBeTruthy()
    })
  })

// describe('AboutDet', () => {
//   test('コンポーネントが存在する', () => {
//     // Logoコンポーネントをマウントする
//     const wrapper = mount(AboutDet)
//     // expect()の中身がtrueだったらテスト合格
//     expect(wrapper.exists()).toBeTruthy()
//   })
// })

describe('Contact', () => {
    test('コンポーネントが存在する', () => {
      // Logoコンポーネントをマウントする
      const wrapper = mount(Contact)
      // expect()の中身がtrueだったらテスト合格
      expect(wrapper.exists()).toBeTruthy()
    })
  })

  describe('Footer', () => {
    test('コンポーネントが存在する', () => {
      // Logoコンポーネントをマウントする
      const wrapper = mount(Footer)
      // expect()の中身がtrueだったらテスト合格
      expect(wrapper.exists()).toBeTruthy()
    })
  })

  describe('Linked', () => {
    test('コンポーネントが存在する', () => {
      // Logoコンポーネントをマウントする
      const wrapper = mount(Linked)
      // expect()の中身がtrueだったらテスト合格
      expect(wrapper.exists()).toBeTruthy()
    })
  })

//   describe('News', () => {
//     test('コンポーネントが存在する', () => {
//       // Logoコンポーネントをマウントする
//       const wrapper = mount(News)
//       // expect()の中身がtrueだったらテスト合格
//       expect(wrapper.exists()).toBeTruthy()
//     })
//   })

//   describe('Product', () => {
//     test('コンポーネントが存在する', () => {
//       // Logoコンポーネントをマウントする
//       const wrapper = mount(Product)
//       // expect()の中身がtrueだったらテスト合格
//       expect(wrapper.exists()).toBeTruthy()
//     })
//   })

  describe('Question', () => {
    test('コンポーネントが存在する', () => {
      // Logoコンポーネントをマウントする
      const wrapper = mount(Question)
      // expect()の中身がtrueだったらテスト合格
      expect(wrapper.exists()).toBeTruthy()
    })
  })

  describe('Team', () => {
    test('コンポーネントが存在する', () => {
      // Logoコンポーネントをマウントする
      const wrapper = mount(Team)
      // expect()の中身がtrueだったらテスト合格
      expect(wrapper.exists()).toBeTruthy()
    })
  })

  describe('Top', () => {
    test('コンポーネントが存在する', () => {
      // Logoコンポーネントをマウントする
      const wrapper = mount(Top)
      // expect()の中身がtrueだったらテスト合格
      expect(wrapper.exists()).toBeTruthy()
    })
  })