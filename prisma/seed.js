const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function seed() {
    const createdUsers = await prisma.user.create({
        data: { 
            username: 'alicemarty',
            email: 'alicemartin@gmail.com',
            profile: {
                create: {
                    bio: 'manager from london',
                    imageUrl: 'https://randomuser.me/api/portraits/men/78.jpg'
                }
            }
        },
    });
    console.log('users created', createdUsers);

    
    // create post==================================
    const createdPost = await prisma.post.create({
        data:{
                title: '10 things you need to know about web development',
                post: ' the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centurie',
                postImg: 'www.google.com',
                published: true,
                user: {
                    connect: {
                        id: createdUsers.id
                    }
                }
        }
    })
    console.log('post created', createdPost);

    // create comment==================================
    const createdComment = await prisma.comment.create({
        data: {
            content: 'pposed to using content here, making it look like readable English',
            user: {
                connect: {
                    id: createdUsers.id
                }
            },
            post: {
                connect: {
                    id: createdPost.id
                }
            }
        }
    })
    console.log('comment created', createdComment);

   
    
    // Don't edit any of the code below this line
    process.exit(0);
}

seed()
    .catch(async (error) => {
        console.error(error);
        await prisma.$disconnect();
        process.exit(1);
    })