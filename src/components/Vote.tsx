import { useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {useAppDispatch} from '../redux/store';
import {fetchOneVote} from '../redux/votesSlice';


const Vote = () => {
    const { voteId } = useParams();
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchOneVote(voteId));
    }, [dispatch])

    return (
        <div>{voteId}
        </div>
    )
}
export default Vote;