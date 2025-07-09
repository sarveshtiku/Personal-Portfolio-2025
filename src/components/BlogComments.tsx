import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Heart, MessageCircle, Reply, MoreHorizontal } from "lucide-react";

interface Comment {
  id: string;
  author: {
    name: string;
    avatar?: string;
    initials: string;
  };
  content: string;
  timestamp: string;
  likes: number;
  isLiked: boolean;
  replies?: Comment[];
}

const mockComments: Comment[] = [
  {
    id: "1",
    author: {
      name: "Sample User",
      initials: "SU"
    },
    content: "This is such a thoughtful take on code reviews! I especially appreciate the emphasis on psychological safety. In my experience, the most productive reviews happen when everyone feels comfortable asking questions.",
    timestamp: "2 hours ago",
    likes: 12,
    isLiked: false,
    replies: [
      {
        id: "1-1",
        author: {
          name: "Sample User",
          initials: "SU"
        },
        content: "Absolutely agree! Creating that safe space is crucial for junior developers especially.",
        timestamp: "1 hour ago",
        likes: 5,
        isLiked: true
      }
    ]
  },
  {
    id: "2", 
    author: {
      name: "Sample User",
      initials: "SU"
    },
    content: "The section on asking questions rather than making demands really resonates with me. I've been trying to shift my language in reviews to be more collaborative. Instead of 'This is wrong' I try 'What do you think about trying X approach here?'",
    timestamp: "4 hours ago",
    likes: 8,
    isLiked: true
  },
  {
    id: "3",
    author: {
      name: "Sample User", 
      initials: "SU"
    },
    content: "Great article! Would love to see a follow-up on handling disagreements in code reviews. Sometimes even with the best intentions, technical discussions can get heated.",
    timestamp: "6 hours ago",
    likes: 15,
    isLiked: false
  }
];

export function BlogComments() {
  const [comments, setComments] = useState<Comment[]>(mockComments);
  const [newComment, setNewComment] = useState("");
  const [replyingTo, setReplyingTo] = useState<string | null>(null);
  const [replyText, setReplyText] = useState("");
  const [totalLikes, setTotalLikes] = useState(47);
  const [isPostLiked, setIsPostLiked] = useState(false);

  const handleLike = (commentId: string) => {
    setComments(prev => 
      prev.map(comment => {
        if (comment.id === commentId) {
          return {
            ...comment,
            likes: comment.isLiked ? comment.likes - 1 : comment.likes + 1,
            isLiked: !comment.isLiked
          };
        }
        if (comment.replies) {
          return {
            ...comment,
            replies: comment.replies.map(reply => {
              if (reply.id === commentId) {
                return {
                  ...reply,
                  likes: reply.isLiked ? reply.likes - 1 : reply.likes + 1,
                  isLiked: !reply.isLiked
                };
              }
              return reply;
            })
          };
        }
        return comment;
      })
    );
  };

  const handlePostLike = () => {
    setTotalLikes(prev => isPostLiked ? prev - 1 : prev + 1);
    setIsPostLiked(!isPostLiked);
  };

  const handleAddComment = () => {
    if (!newComment.trim()) return;
    
    const comment: Comment = {
      id: Date.now().toString(),
      author: {
        name: "You",
        initials: "YU"
      },
      content: newComment,
      timestamp: "Just now",
      likes: 0,
      isLiked: false
    };
    
    setComments([comment, ...comments]);
    setNewComment("");
  };

  const handleAddReply = (parentId: string) => {
    if (!replyText.trim()) return;
    
    const reply: Comment = {
      id: `${parentId}-${Date.now()}`,
      author: {
        name: "You", 
        initials: "YU"
      },
      content: replyText,
      timestamp: "Just now",
      likes: 0,
      isLiked: false
    };
    
    setComments(prev =>
      prev.map(comment => {
        if (comment.id === parentId) {
          return {
            ...comment,
            replies: [...(comment.replies || []), reply]
          };
        }
        return comment;
      })
    );
    
    setReplyText("");
    setReplyingTo(null);
  };

  const CommentComponent = ({ comment, isReply = false }: { comment: Comment; isReply?: boolean }) => (
    <div className={`space-y-3 ${isReply ? 'ml-8 border-l border-border pl-4' : ''}`}>
      <div className="flex items-start gap-3">
        <Avatar className="h-8 w-8">
          <AvatarImage src={comment.author.avatar} />
          <AvatarFallback className="text-xs">{comment.author.initials}</AvatarFallback>
        </Avatar>
        
        <div className="flex-1 space-y-2">
          <div className="flex items-center gap-2 text-sm">
            <span className="font-medium text-primary">{comment.author.name}</span>
            <span className="text-academic-gray">{comment.timestamp}</span>
          </div>
          
          <p className="text-academic-gray leading-relaxed">{comment.content}</p>
          
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => handleLike(comment.id)}
              className={`gap-1 h-7 px-2 ${comment.isLiked ? 'text-red-500' : 'text-academic-gray'}`}
            >
              <Heart className={`h-3 w-3 ${comment.isLiked ? 'fill-current' : ''}`} />
              {comment.likes}
            </Button>
            
            {!isReply && (
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setReplyingTo(replyingTo === comment.id ? null : comment.id)}
                className="gap-1 h-7 px-2 text-academic-gray"
              >
                <Reply className="h-3 w-3" />
                Reply
              </Button>
            )}
          </div>
          
          {replyingTo === comment.id && (
            <div className="space-y-2 animate-fade-in">
              <Textarea
                placeholder="Write a reply..."
                value={replyText}
                onChange={(e) => setReplyText(e.target.value)}
                className="min-h-[80px] resize-none"
              />
              <div className="flex gap-2">
                <Button size="sm" onClick={() => handleAddReply(comment.id)}>
                  Reply
                </Button>
                <Button size="sm" variant="ghost" onClick={() => setReplyingTo(null)}>
                  Cancel
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
      
      {comment.replies && comment.replies.length > 0 && (
        <div className="space-y-4">
          {comment.replies.map((reply) => (
            <CommentComponent key={reply.id} comment={reply} isReply={true} />
          ))}
        </div>
      )}
    </div>
  );

  return (
    <div className="space-y-6">
      {/* Post Engagement */}
      <Card className="academic-shadow">
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-6">
              <Button
                variant="ghost"
                size="lg"
                onClick={handlePostLike}
                className={`gap-2 ${isPostLiked ? 'text-red-500' : 'text-academic-gray'}`}
              >
                <Heart className={`h-5 w-5 ${isPostLiked ? 'fill-current' : ''}`} />
                {totalLikes} likes
              </Button>
              
              <div className="flex items-center gap-2 text-academic-gray">
                <MessageCircle className="h-5 w-5" />
                {comments.reduce((total, comment) => total + 1 + (comment.replies?.length || 0), 0)} comments
              </div>
            </div>
            
            <Badge variant="secondary" className="text-xs">
              Discussion
            </Badge>
          </div>
        </CardContent>
      </Card>

      {/* Add Comment */}
      <Card className="academic-shadow">
        <CardHeader>
          <CardTitle className="text-lg font-academic">Join the Discussion</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-start gap-3">
            <Avatar className="h-8 w-8">
              <AvatarFallback className="text-xs">YU</AvatarFallback>
            </Avatar>
            <div className="flex-1 space-y-3">
              <Textarea
                placeholder="Share your thoughts on this article..."
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                className="min-h-[100px] resize-none"
              />
              <div className="flex justify-end">
                <Button onClick={handleAddComment} disabled={!newComment.trim()}>
                  Post Comment
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Comments */}
      <Card className="academic-shadow">
        <CardHeader>
          <CardTitle className="text-lg font-academic">
            Comments ({comments.reduce((total, comment) => total + 1 + (comment.replies?.length || 0), 0)})
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {comments.length === 0 ? (
            <div className="text-center py-8 text-academic-gray">
              <MessageCircle className="h-12 w-12 mx-auto mb-3 opacity-30" />
              <p>No comments yet. Be the first to share your thoughts!</p>
            </div>
          ) : (
            comments.map((comment) => (
              <CommentComponent key={comment.id} comment={comment} />
            ))
          )}
        </CardContent>
      </Card>
    </div>
  );
}