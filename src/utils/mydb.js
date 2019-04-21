/* eslint-disable standard/no-callback-literal */
const db = wx.cloud.database({
  env: 'earnmoney-7c2ab8'
})
export var mydb = {

  /**
   * insert a user
   * @param {Object} user USER
   * @param {function} callback CALLBACK
   */
  insertOneUser: function (user, callback) {
    if (user) {
      db.collection('users').add({
        data: user,
        success: res => {
          callback(res)
        },
        fail: console.error
      })
    } else {
      callback('user is null or undefined', null)
    }
  },
  /**
   * delete a user by user id
   * @param {String} userId user _id
   * @param {Funtfion} callback result
   */
  deleteOneUserByUserId: function (userId, callback) {
    if (userId) {
      db.collection('users').doc(userId).remove({
        success: res => {
          callback(res)
        },
        fail: console.error
      })
    } else {
      callback('userId id null or undefined')
    }
  },
  /**
   * update a user info by user id
   * @param {String} userId user _id
   * @param {Object} updateInfo usr info Object
   * @param {Function} callback result
   */
  updateOneUserByUserId: function (userId, updateInfo, callback) {
    if (userId) {
      db.collection('users').doc(userId).update({
        data: updateInfo,
        success: res => {
          callback(res)
        },
        fail: console.error
      })
    } else {
      callback('userId id null or undefined')
    }
  },
  /**
   * get a user info by user id
   * @param {String} _id user._id
   * @param {Function} callback result
   */
  queryOneUserByUserId: function (_id, callback) {
    db.collection('users').doc(_id).get({
      success: res => {
        callback(res)
      },
      fail: console.error
    })

  },
  /**
   * query user info by user name
   * @param {Sring} userName user name
   * @param {Function } callback result
   */
  queryOneUserByUserName: function (userName, callback) {
    if (userName) {
      db.collection('users').where({
        'name': userName
      }).get({
        success: res => {
          callback(res)
        },
        fail: console.error
      })

    } else {
      callback('userName is null or undefined')
    }
  },
  /**
   * query 20 users
   * @param {Function} callback result
   */
  queryAllUsers: function (callback) {
    db.collection('users').get({
      success: res => {
        callback(res)
      },
      fail: console.error
    }
    )
  },
  /**
   * insert a task
   * @param {Object} task task info
   * @param {Function} callback result
   */
  insertOneTask: function (task, callback) {
    db.collection('tasks').add({
      data: task,
      success: res => {
        callback(res)
      },
      fail: console.error
    })
  },
  /**
 * delete a task by task id
 * @param {String} taskId task _id
 * @param {Funtfion} callback result
 */
  deleteOneTaskByTaskId: function (taskId, callback) {
    db.collection('tasks').doc(taskId).remove({
      success: res => {
        callback(res)
      },
      fail: console.error
    })
  },
  /**
   * update a task info by task id
   * @param {String} taskId task _id
   * @param {Object} updateInfo task info Object
   * @param {Function} callback result
   */
  updateOneTaskByTaskId: function (taskId, updateInfo, callback) {
    db.collection('tasks').doc(taskId).update({
      data: updateInfo,
      success: res => {
        callback(res)
      },
      fail: console.error
    })
  },
  /**
   * get a task info by task id
   * @param {String} taskId task _id
   * @param {Function} callback result
   */
  queryOneTaskByTaskId: function (taskId, callback) {
    if (taskId) {
      db.collection('tasks').doc(taskId).get({
        success: res => {
          callback(res)
        },
        fail: console.error
      })
    } else {
      callback('taskId id null or undefined')
    }
  },
  /**
   * query task info by task name
   * @param {Sring} taskName task name
   * @param {Function } callback result
   */
  queryTasksByTaskName: function (taskName, callback) {
    db.collection('tasks').where({
      name: taskName
    }).get({
      success: res => {
        callback(res)
      },
      fail: console.error
    })
  },
  /**
   * query 20 tasks
   * @param {Function} callback result
   */
  queryAllTasks: function (callback) {
    db.collection('tasks').get({
      success: res => {
        callback(res)
      },
      fail: console.error
    }
    )
  }
}
