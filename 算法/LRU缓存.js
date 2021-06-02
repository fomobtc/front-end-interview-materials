/**
 * @description: https://leetcode-cn.com/problems/lru-cache/
 * @param {*}
 * @return {*}
 */
class ListNode {
	constructor(key, value) {
		this.key = key;
		this.value = value;
		this.next = null;
		this.prev = null;
	}
}

class LRUCache {
	constructor(capacity) {
		this.capacity = capacity; // 缓存的容量
		this.hash = {}; // 哈希表
		this.count = 0; // 缓存数目
		this.dummyHead = new ListNode(); // 虚拟头结点
		this.dummyTail = new ListNode(); // 虚拟尾节点
		this.dummyHead.next = this.dummyTail;
		this.dummyTail.prev = this.dummyHead; // 相联系
	}

	get(key) {
		let node = this.hash[key]; // 从哈希表中，获取对应的节点
		if (node == null) return -1; // 如果节点不存在，返回-1
		this.moveToHead(node); // 被读取了，该节点移动到链表头部
		return node.value; // 返回出节点值
	}

	put(key, value) {
		let node = this.hash[key]; // 获取链表中的node
		if (node == null) {
			// 不存在于链表，是新数据
			if (this.count == this.capacity) {
				// 容量已满
				this.removeLRUItem(); // 删除最远一次使用的数据
			}
			let newNode = new ListNode(key, value); // 创建新的节点
			this.hash[key] = newNode; // 存入哈希表
			this.addToHead(newNode); // 将节点添加到链表头部
			this.count++; // 缓存数目+1
		} else {
			// 已经存在于链表，老数据
			node.value = value; // 更新value
			this.moveToHead(node); // 将节点移到链表头部
		}
	}

	moveToHead(node) {
		this.removeFromList(node); // 从链表中删除节点
		this.addToHead(node); // 添加到链表的头部
	}

	removeFromList(node) {
		let temp1 = node.prev; // 暂存它的后继节点
		let temp2 = node.next; // 暂存它的前驱节点
		temp1.next = temp2; // 前驱节点的next指向后继节点
		temp2.prev = temp1; // 后继节点的prev指向前驱节点
	}

	addToHead(node) {
		// 插入到虚拟头结点和真实头结点之间
		node.prev = this.dummyHead; // node的prev指针，指向虚拟头结点
		node.next = this.dummyHead.next; // node的next指针，指向原来的真实头结点
		this.dummyHead.next.prev = node; // 原来的真实头结点的prev，指向node
		this.dummyHead.next = node; // 虚拟头结点的next，指向node
	}
	removeLRUItem() {
		// 删除“老家伙”
		let tail = this.popTail(); // 将它从链表尾部删除
		delete this.hash[tail.key]; // 哈希表中也将它删除
		this.count--; // 缓存数目-1
	}
	popTail() {
		// 删除链表尾节点
		let tail = this.dummyTail.prev; // 通过虚拟尾节点找到它
		this.removeFromList(tail); // 删除该真实尾节点
		return tail; // 返回被删除的节点
	}
}
