import React from 'react'

const Forms = () => {

  const [memeImage, setMemeImage] = React.useState({
    topText: '',
    bottomText: '',
    imgUrl: 'https://i.imgflip.com/1bh3.jpg'
  })

  const [allmemes, setAllMemes] = React.useState([])

  React.useEffect(() => {
    fetch('https://api.imgflip.com/get_memes')
    .then(response => response.json())
    .then(obj => {
      setAllMemes(obj.data.memes)
    })
  }, [])


  function handleChange(event) {
    const { name, value } = event.target
    setMemeImage(prevMeme => ({
      ...prevMeme,
      [name]: value
    }))
  }

  function handleClick(event) {
    event.preventDefault()
    // generate a random img and set the memeImage state with new Url
    const randomNumber = Math.floor(Math.random() * allmemes.length)
    const randomImage = allmemes[randomNumber].url
    setMemeImage(prevMeme => ({
      ...prevMeme,
      imgUrl: randomImage
    }))
  }

  

  return (
  <>
    <form className={`flex flex-col justify-center items-center p-4 sm:grid sm:grid-cols-2 sm:grid-rows-2 sm:justify-items-center sm:gap-1`}>
        <input 
          className={`border-2 border-black rounded m-2 w-4/5  px-2 py-1 font-inter sm:max-w-xs sm:justify-self-end sm:mr-0`} 
          type="text"
          name= 'topText'
          onChange={handleChange}
          />
               
        <input 
          className={`border-2 border-black rounded m-2 w-4/5  px-2 py-1 font-inter sm:max-w-xs sm:justify-self-start sm:ml-0`} 
          type="text"
          name= 'bottomText'
          onChange={handleChange}
          />
          
        <button 
          className={`text-white font-karla tracking-tighter font-bold rounded m-2 w-4/5 bg-gradient-to-r from-purple-900 to-purple-500 px-2 py-1 sm:col-span-full sm:max-w-xl`}
          onClick={handleClick}
          >Get a new meme image 🖼</button>
    </form>
    <div className={`flex relative justify-center items-center w-full`}>
     <img alt='' src={memeImage.imgUrl} className={`w-3/4 sm:w-1/3`} />
     <p className='absolute top-4 text-white font-extrabold text-2xl font-karla uppercase'>{memeImage.topText}</p>
     <p className='absolute bottom-4 text-white font-extrabold text-2xl font-karla uppercase'>{memeImage.bottomText}</p>
    </div>
  </>
  )
}

export default Forms