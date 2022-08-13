import { addDoc, collection } from 'firebase/firestore'
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage'
import { useRef } from 'react'
import { auth, db, storage } from '../../firebase'

const Home = () => {
    const form = useRef()
    const submitPortfolio = (e) => {
        e.preventDefault();
        const title = form.current[0]?.value;
        const description = form.current[1]?.value;
        const url = form.current[2]?.value;
        const git = form.current[3]?.value;
        const cover = form.current[4]?.files[0];

        const storageRef = ref(storage, `portfolio/${cover.name}`)

        uploadBytes(storageRef, cover).then(
            (snapshot)=>{
                getDownloadURL(snapshot.ref).then((downloadUrl)=>{
                    savePortfolio({
                        title,
                        description,
                        url,
                        git,
                        cover: downloadUrl
                    })
                 }, (err) => {
                        savePortfolio({
                            title,
                            description,
                            url,
                            git,
                            cover: null
                        })
                })
            }, (err) => {
                savePortfolio({
                    title,
                    description,
                    url,
                    git,
                    cover: null
                })
            }
        )
    }
    const savePortfolio =  async(portfolio)=>{
        try {
            await addDoc(collection(db, 'portfolio'), portfolio)
            window.location.reload(false);
        } catch (error) {
            alert(`Failed to add portfolio due to ${error}`)
        }
    }

  return (
    <div className='dashboard'>
        <div className="contact-form">
            <form ref={form} onSubmit={submitPortfolio}>
                <p><input type="text" placeholder='Name' /></p>
                <p><textarea type="text" placeholder='Description' /></p>
                <p><input type="text" placeholder='Demo URL' /></p>
                <p><input type="text" placeholder='Source Code' /></p>
                <p><input type="file" placeholder='Image' /></p>
                <button type='submit' className="flat-button">Submit</button>
                <button onClick={()=> auth.signOut()} className="flat-button">Sign OUT</button>      
            </form>
        </div>
       
    </div>
  )
}

export default Home