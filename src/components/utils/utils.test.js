import { getAllArticles } from "./utils";
import { expect, jest } from '@jest/globals';

describe('getAllArticles', () => {
    it('should return an array of article objects when invoked', () => {
        getAllArticles().then((data) => {
            expect(data).toHaveLength(36)
            data.forEach((article) => {
                expect(article).objectContaining({
                    article_id: expect.any(Number), 
                    author: expect.any(String), 
                    body: expect.any(String), 
                    comment_count: expect.any(Number), 
                    title: expect.any(String), 
                    topic: expect.any(String), 
                    votes: expect.any(Number),
                })
            })
        })
    });
});