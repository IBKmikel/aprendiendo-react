import './App.css'
import { TwitterFollowCard } from './TwitterFollorCard';

const users =[
    {
        userName: 'mikel_ibk',
        name: 'Michael Alvarado',
        isFollowing : true
    },
    {
        userName: 'midudev',
        name: 'Miguel Angel',
        isFollowing : false
    }
]

export function App (){

    return(
        <section className='App'>
            {
                users.map(({userName, name, isFollowing}) => (
                    <TwitterFollowCard key={userName} userName={userName} initialIsFollowing={isFollowing}>
                    {name}
                    </TwitterFollowCard>
                )
                )
            }
        </section>
    );
}
