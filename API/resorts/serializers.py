from builtins import object

class ResortSerializer(object):
    def __init__(self, body):
        self.body = body

    @property
    def all_resorts(self):
        output = {'resorts': []}

        for resort in self.body:
            resort_details = {
                'id': resort.id,
                'name': resort.name,
                'comments':[]
            }
            for comment in resort.comments.all(): #add all() here because without all(), its not query set;
                comment_details={
                    'id': comment.id,
                    'title': comment.title,
                    'body': comment.body,
                    'resort_id':resort.id
                }
                resort_details['comments'].append(comment_details)
            output['resorts'].append(resort_details)

        return output

    @property
    def resort_detail(self):
        resort_details = {
            'id':self.body.id,
            'name': self.body.name,
            'comments':[]
        }
        for comment in self.body.comments.all():
            comment_details={
                    'id': comment.id,
                    'title': comment.title,
                    'body': comment.body,
                    'resort_id':comment.resort.id
                }
            resort_details['comments'].append(comment_details)
        return resort_details

class CommentSerializer(object):
    def __init__(self, body):
        self.body = body

    @property
    def all_comments(self):
        output = {'comments': []}

        for comment in self.body:
            comment_details = {
                'id':comment.id,
                'title': comment.title,
                'body': comment.body,
                'resort_id': comment.resort.id
            }
            output['comments'].append(comment_details)
        return output

    @property
    def comment_detail(self):
        comment_details = {
            'id':self.body.id,
            'title': self.body.title,
            'body': self.body.body,
            'resort_id': self.body.resort.id
        }
        
        return comment_details