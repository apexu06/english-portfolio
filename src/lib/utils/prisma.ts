import { PrismaClient, type Comment } from '@prisma/client';

const prisma = new PrismaClient();

export const getCommentsFromPost = async (postName: string): Promise<Comment[]> => {
	return await prisma.comment.findMany({ where: { postName: postName } });
};

export const createNewComment = async (content: string, postName: string): Promise<Comment> => {
	return await prisma.comment.create({
		data: {
			postName: postName,
			content: content,
		},
	});
};

export const updateComment = async (id: string, content: string): Promise<Comment> => {
	return await prisma.comment.update({
		where: { id: id },
		data: { content: content },
	});
};

export const deleteComment = async (id: string): Promise<Comment> => {
	return await prisma.comment.delete({ where: { id: id } });
};
