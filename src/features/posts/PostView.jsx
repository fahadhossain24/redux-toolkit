import { useDispatch, useSelector } from 'react-redux';
import { fetchPost } from './postSlice';

const PostView = () => {

    const {posts, isLoading, error} = useSelector(state => state.posts)
    const dispatch = useDispatch()
    return (
        <div>
            <button onClick={() => dispatch(fetchPost())}>load Post</button>
            {isLoading && <h2>Loading....</h2>}
            {error && <h3>{error}</h3>}
            {
                posts?.map((post, index) => <div key={index}>
                    <h2>{post.title}</h2>
                    <p>{post.body}</p>
                </div>)
            }
        </div>
    );
};

export default PostView;