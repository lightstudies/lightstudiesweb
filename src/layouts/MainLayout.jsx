import { PhotoPage } from '../pages'

export const MainLayout = () => {
  return (
    <div className="App-main-layout">
      <div className="App-header">Header</div>
      <div className="App-body">
        <PhotoPage />
      </div>
      <div className="App-footer">Footer</div>
    </div>
  )
}
