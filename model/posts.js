module.exports = {

    posts: [
        {
            id: 'fsdfsdf',
            title: 'test title',
            description: 'test description',
            icon: 'capblack',
            price: '50'

        }
    ],

    getAll(){
        return this.posts
    }
}