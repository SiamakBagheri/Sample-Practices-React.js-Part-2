import { get } from "../../Services/Http";

export function LoadPost(id) {
  return get(`/posts/${id}`);
}
