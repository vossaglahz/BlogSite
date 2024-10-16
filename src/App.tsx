import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Layout } from './components/Layout/Layout'
import { ContentData } from './containers/ContentData/ContentData'
import { Editor } from './containers/Editor/Editor'
import { Submit } from './containers/Submit/Submit'
import { ContextEdit } from './containers/Context/ContextEdit'
import { ContextDelete } from './containers/Context/ContextDelete'
import { Delete } from './containers/Delete/Delete'
import { ReadMore } from './containers/ReadMore/ReadMore'
import { ContextReadMore } from './containers/Context/ContextReadMore'
import About from './components/About/About'
import Contacts from './components/Contacts/Contacts'

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<Layout/>}>
            <Route index element={<ContentData/>}/>
            <Route path='/all' element={<ContentData/>}/>
            <Route path='/edit' element={<Editor/>}/>
            <Route path='/edit/:id' element={<ContextEdit/>}/>
            <Route path='/delete' element={<Delete/>}/>
            <Route path='/delete/:id' element={<ContextDelete/>}/>
            <Route path='/readmore' element={<ReadMore/>}/>
            <Route path='/readmore/:id' element={<ContextReadMore/>}/>
            <Route path='/submit' element={<Submit/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/contacts' element={<Contacts/>}/>
          </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
