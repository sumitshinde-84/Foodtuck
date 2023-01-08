import { content } from '../index'
import { blogImg } from './images'

export function createBlog () {
  const blogSect = document.createElement('div')
  blogSect.className = 'blogSect'
  const title1 = document.createElement('h2')
  title1.textContent = 'Blog Post'
  const title2 = document.createElement('h1')
  title2.innerHTML = '<span>Lat</span>est News & Blog'

  const blogCardSect = document.createElement('div')
  blogCardSect.className = 'blogCardSect'

  createBlogCard(
    blogImg[0],
    'Pellentesque Non Efficitur Mi Aliquam Convallis Mi Quis'
  )
  createBlogCard(
    blogImg[1],
    'Pellentesque Non Efficitur Mi Aliquam Convallis Mi Quis'
  )
  createBlogCard(
    blogImg[2],
    'Pellentesque Non Efficitur Mi Aliquam Convallis Mi Quis'
  )

  function createBlogCard (BLOGimg, description) {
    const blogCard = document.createElement('div')
    blogCard.className = 'blogCard'
    const img = document.createElement('img')
    img.src = BLOGimg
    const date = document.createElement('p')
    date.textContent = '10 Feb 2022'
    const desc = document.createElement('p')
    desc.textContent = description
    const learnMore = document.createElement('p')
    learnMore.textContent = 'Learn More'
    const iconSect = document.createElement('div')
    iconSect.className = 'iconSect'

    const like = document.createElement('img')
    like.src = blogImg[3]
    const comment = document.createElement('img')
    comment.src = blogImg[4]
    const share = document.createElement('img')
    share.src = blogImg[5]

    iconSect.appendChild(like)
    iconSect.appendChild(comment)
    iconSect.appendChild(share)

    blogCard.appendChild(img)
    blogCard.appendChild(date)
    blogCard.appendChild(desc)
    blogCard.appendChild(learnMore)
    blogCard.appendChild(iconSect)
    blogCardSect.appendChild(blogCard)
  }

  blogSect.appendChild(title1)
  blogSect.appendChild(title2)
  blogSect.appendChild(blogCardSect)
  content.appendChild(blogSect)
}
