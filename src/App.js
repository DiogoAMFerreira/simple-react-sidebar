import './App.css';
import Sidebar from './components/sidebar/Sidebar';

function App() {

    const menu = [
        {name: 'Dashboard', icon: 'Dashboard', subitems: [
            {name:'Dashboard 1'},
            {name:'Dashboard 2'}
        ]},
        {name: 'Import', icon: 'Upload'}
    ];

    return (
        <div >
            <h1>Heyyo</h1>
            <Sidebar header='SimpleSideBar' items={menu}></Sidebar>
        </div>
    );
}

export default App;
