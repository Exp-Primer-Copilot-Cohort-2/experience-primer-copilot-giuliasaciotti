function skillsMember(){
return {
    restrict: 'E',
    templateUrl: 'modules/skil Is/views/member.html',
controller: 'SkillsMemberController',
controllerAs: 'vm',
bindToController: true,
scope: {
member:'m'
}
};
}