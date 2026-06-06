pdfjsLib.GlobalWorkerOptions.workerSrc='https://cdn.jsdelivr.net/npm/pdfjs-dist@3.11.174/build/pdf.worker.min.js';

// PABLO PRE-LOADED CONTENT
// ═══════════════════════════════════════════════════════
const PABLO_CONTENT=`PABLO – MECH 106 BASIC MECHANICS
University of Energy and Natural Resources (UENR), Sunyani, Ghana
Course Instructor: Mr. Prosper Owusu

COURSE CONTENTS: Introduction & Fundamental Concepts, Forces & Moments, Statics (Equilibrium of Particles and Rigid Bodies, Structures, Friction), Dynamics (Basic Dynamics of Particles)

COURSE OBJECTIVES:
- Understand and apply Newton's laws of motion to particles and rigid bodies
- Understand the basis of force and moments, draw free body diagrams
- Analyze 2D and 3D equilibrium of system of forces (tensions in ropes/cables, forces in links, support and contact reactions)
- Find support reactions and internal forces of 2D determinant structures
- Solve static and dynamic problems involving dry friction
- Solve 2D problems involving equation of motion, impulse-momentum, work-energy

ASSESSMENT: Continuous Assessment 40% (Homework 10%, Quiz 25%, Attendance 5%), End of Semester Exams 60% (Statics 3/4, Dynamics 1/4)

UNIT 1: INTRODUCTION AND FUNDAMENTAL CONCEPTS
What is Mechanics? A branch of physical science which describes and predicts the conditions of rest or motion of bodies under the action of forces.
- Mechanics of Rigid Bodies: Statics (equilibrium under balanced forces) and Dynamics (motion under unbalanced forces)
- Dynamics divides into Kinematics (motion without reference to forces) and Kinetics (relates motion to forces)

FUNDAMENTAL DEFINITIONS:
- Space: geometric region with three coordinates measured from a reference/origin
- Time: interval between two events
- Mass: quantity of matter possessed by a body
- Force: action of one body upon another; characterized by point of application, magnitude, and direction; represented as a vector

PARTICLE: a very small amount of matter assumed to occupy a single point in space; has mass but negligible size; all forces assumed concurrent

RIGID BODY: combination of many particles occupying fixed positions with respect to each other; size and shape assumed constant

NEWTON'S LAWS OF MOTION:
1st Law: If resultant force on a particle is zero, the particle remains at rest or continues in straight-line motion (Law of Inertia)
2nd Law: F = ma — the rate of change of momentum is proportional to the applied external force; if resultant is not zero, acceleration is proportional to resultant and in same direction
3rd Law: Forces of action and reaction between bodies in contact have the same magnitude, same line of action, and opposite sense

NEWTON'S LAW OF GRAVITATION: F = Gm₁m₂/r² where G = 6.67384×10⁻¹¹ m³/kg·s²
Weight: W = mg where g = 9.81 m/s² (gravitational acceleration on Earth's surface)

SYSTEMS OF UNITS:
- SI (metric): base units — meter (m), kilogram (kg), second (s), Newton (N = kg·m/s²)
- US Customary: foot (ft), pound (lb), second (s)

UNIT 2: FORCES AND MOMENTS
SYSTEMS OF FORCES: A force system is a collection of forces at specified locations.
Types: Collinear (common line of action), Parallel (parallel lines of action), Concurrent (lines of action intersect at common point), Coplanar (all forces in same plane), Spatial (forces in 3D space)

RESULTANT OF TWO FORCES (Parallelogram Law): The combined effect of two forces is represented by a single resultant force — the diagonal of a parallelogram with the two forces as adjacent sides.
- Vector addition: R = P + Q (commutative: P + Q = Q + P)
- Cosine rule: R² = P² + Q² – 2PQ·cosB
- Sine rule: sinA/P = sinB/R = sinC/Q

RECTANGULAR COMPONENTS: F = Fxi + Fyj
- Fx = F·cosθ, Fy = F·sinθ
- R = √(Rx² + Ry²), θ = tan⁻¹(Ry/Rx)
- For multiple forces: Rx = ΣFx, Ry = ΣFy

RECTANGULAR COMPONENTS IN 3D SPACE:
F = Fxi + Fyj + Fzk
Direction cosines: Fx = F·cosθx, Fy = F·cosθy, Fz = F·cosθz
Unit vector: λ = cosθxi + cosθyj + cosθzk; cos²θx + cos²θy + cos²θz = 1

VECTOR/CROSS PRODUCT: V = P × Q
- Magnitude: V = PQ·sinθ
- Direction: right-hand rule
- Not commutative: P×Q = -Q×P
- Distributive: P×(Q₁+Q₂) = P×Q₁ + P×Q₂

MOMENT OF A FORCE (Torque):
- Moment about a point: M = r × F (vector product of position vector and force)
- Moment magnitude: M = F·d where d = perpendicular distance (moment arm)
- Varignon's Theorem: moment of a force = sum of moments of its components
- Couple: two equal and opposite forces → net force = 0 but moment ≠ 0; M = F·d

UNIT 3: EQUILIBRIUM OF PARTICLES AND RIGID BODIES
EQUILIBRIUM: A body is in equilibrium when the resultant of all forces acting on it is zero.
Conditions:
- ΣFx = 0, ΣFy = 0 (2D)
- ΣFx = 0, ΣFy = 0, ΣFz = 0 (3D)
- ΣM = 0 (moments about any point)

FREE BODY DIAGRAM (FBD): A diagram showing a body isolated from its surroundings with all external forces and reactions clearly labeled. Essential step in solving any equilibrium problem.

SUPPORT REACTIONS:
- Pin support: provides Rx and Ry (two unknowns)
- Roller support: provides one force perpendicular to surface
- Fixed support: provides Rx, Ry, and moment M (three unknowns)

UNIT 4: STRUCTURES
TRUSS: A structure composed of two-force members connected at joints (pins). Forces are only axial (tension or compression).
- Method of Joints: analyze forces at each pin using ΣFx=0 and ΣFy=0
- Method of Sections: cut through members, use equilibrium of a section

FRAMES AND MACHINES: Structures with multi-force members; separate members for analysis.

UNIT 5: FRICTION
DRY FRICTION: Coulomb friction between two surfaces.
- F ≤ μₛN (static friction, impending motion)
- F = μₖN (kinetic friction, sliding)
- μₛ = coefficient of static friction (tan φₛ = μₛ)
- μₖ = coefficient of kinetic friction (< μₛ)

UNIT 6: DYNAMICS OF PARTICLES
KINEMATICS: Study of motion without reference to forces.
- Position: x(t), velocity: v = dx/dt, acceleration: a = dv/dt = d²x/dt²
- For constant acceleration: v = v₀ + at, x = x₀ + v₀t + ½at², v² = v₀² + 2a(x-x₀)

KINETICS: Relates forces to motion.
- Newton's 2nd Law: ΣF = ma
- Work-Energy: U₁₋₂ = ΔKE = ½mv₂² - ½mv₁²
- Impulse-Momentum: F·Δt = Δ(mv) = m·v₂ - m·v₁`;

const PABLO_DOC={id:'pablo',name:'PABLO_01_BASIC_MECHANICS.pdf',totalPages:183,date:'Pre-loaded',isPablo:true,text:PABLO_CONTENT,size:0};

// ═══════════════════════════════════════════════════════

// DEFAULT FALLBACK CONTENT
// ═══════════════════════════════════════════════════════
const DEFAULT_QS=[
  {question:"What is the definition of Mechanics?",options:["Study of chemical reactions","Branch of physical science describing conditions of rest or motion under forces","Study of electrical circuits","Analysis of fluid thermodynamics"],answer:1},
  {question:"Newton's First Law states that a particle at rest will remain at rest when:",options:["A net force acts on it","The resultant force on it is zero","Gravity is absent","It has no mass"],answer:1},
  {question:"The formula F = ma is Newton's:",options:["First Law","Second Law","Third Law","Law of Gravitation"],answer:1},
  {question:"What is a Free Body Diagram (FBD)?",options:["A diagram of the solar system","A body isolated from its surroundings showing all external forces","A sketch of molecular bonds","A circuit diagram"],answer:1},
  {question:"In the SI system, force is measured in:",options:["Pounds","Watts","Newtons","Joules"],answer:2},
  {question:"The Parallelogram Law is used to find the:",options:["Volume of a body","Resultant of two forces","Mass of an object","Temperature of a system"],answer:1}
];
const DEFAULT_FC=[
  {q:"What is Mechanics?",a:"A branch of physical science that describes and predicts the conditions of rest or motion of bodies under the action of forces."},
  {q:"State Newton's First Law of Motion.",a:"If the resultant force on a particle is zero, the particle will remain at rest or continue to move in a straight line (Law of Inertia)."},
  {q:"State Newton's Second Law of Motion.",a:"F = ma — if the resultant force is not zero, acceleration is proportional to the resultant and in same direction."},
  {q:"State Newton's Third Law of Motion.",a:"The forces of action and reaction between bodies in contact have the same magnitude, same line of action, and opposite sense."},
  {q:"What is a Free Body Diagram?",a:"A diagram showing a body isolated from its surroundings with all external forces and reactions clearly labeled. Essential first step in any equilibrium problem."},
  {q:"What is the Parallelogram Law?",a:"The combined effect of two forces is represented by the diagonal of a parallelogram with the two forces as adjacent sides. R² = P² + Q² – 2PQ·cosB"},
  {q:"Difference between Statics and Dynamics?",a:"Statics: equilibrium under balanced forces (resultant=0). Dynamics: motion under unbalanced forces (resultant≠0)."},
  {q:"Conditions for equilibrium of a rigid body?",a:"ΣFx = 0, ΣFy = 0 (force equilibrium) and ΣM = 0 (moment equilibrium about any point)."},
  {q:"Define Moment of a Force.",a:"Moment (torque) = force × perpendicular distance: M = F·d. Also M = r × F (vector product)."},
  {q:"What is Coulomb (Dry) Friction?",a:"Static friction: F ≤ μₛN. Kinetic friction: F = μₖN. μₛ = static coefficient; μₖ < μₛ."}
];

// ═══════════════════════════════════════════════════════
